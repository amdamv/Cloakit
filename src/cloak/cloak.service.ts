import { Injectable } from '@nestjs/common';
import { CheckDto } from './dto/check.dto';
import { RESULT_BOT, RESULT_NOT_BOT } from './constant';
import { Parser } from 'json2csv';
import { CloakLogRepository } from './repo/cloak-log.repository';

@Injectable()
export class CloakService {
  private readonly suspiciousIpMap = new Map<string, boolean>([
    ['8.8.8.8', true],
    ['1.1.1.1', true],
  ]);

  private readonly blockedCountriesMap = new Map<string, boolean>([
    ['KP', true],
    ['IR', true],
    ['SY', true],
  ]);

    private readonly suspiciousAgents = ['curl', 'python-requests', 'PostmanRuntime'];

  constructor(private readonly cloakLogRepo: CloakLogRepository) {}

    async check(dto: CheckDto): Promise<{ result: boolean }> {
        const result = this.isBot(dto);
        await this.cloakLogRepo.save({ ...dto, result });
        return { result };
    }

    private isBot(dto: CheckDto): boolean {
        const { ip, userAgent, country } = dto;
        if (
            this.suspiciousIpMap.has(ip) ||
            this.blockedCountriesMap.has(country) ||
            this.suspiciousAgents.some(agent => userAgent.includes(agent))
        ) {
            return true;
        }
        return false;
    }

    async exportLogs(limit = 1000, offset = 0): Promise<string> {
        const logs = await this.cloakLogRepo.findAll(limit, offset);
        const Parser = (await import('json2csv')).Parser;
        const parser = new Parser({ fields: ['ip', 'userAgent', 'country', 'os', 'result', 'createdAt'] });
        return parser.parse(logs);
    }

    async getLogs(limit = 20, offset = 0) {
        return this.cloakLogRepo.findAll(limit, offset);
    }
}
