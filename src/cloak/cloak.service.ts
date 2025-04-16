import { Injectable } from '@nestjs/common';
import { CheckDto } from './dto/check.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloakLog } from './schemas/cloak-log.schema';


@Injectable()
export class CloakService {
    constructor(
        @InjectModel(CloakLog.name)
        private readonly cloakLogModel: Model<CloakLog>
    ) {}
    private readonly suspiciousIps = ['8.8.8.8', '1.1.1.1'];
    private readonly suspiciousAgents = ['curl', 'python-requests', 'PostmanRuntime'];
    private readonly blockedCountries = ['KP', 'IR', 'SY'];

    check(dto: CheckDto): 'bot' | 'not_bot' {
        const { ip, userAgent, country } = dto;

        if (
            this.suspiciousIps.includes(ip) ||
            this.blockedCountries.includes(country) ||
            this.suspiciousAgents.some(agent => userAgent.includes(agent))
        ) {
            return 'bot';
        }

        return 'not_bot';
    }

    async getLogs(limit = 50) {
        return this.cloakLogModel.find().sort({ createdAt: -1 }).limit(limit).exec();
    }
}