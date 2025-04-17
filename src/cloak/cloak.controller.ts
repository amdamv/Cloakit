import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { CloakService } from './cloak.service';
import { CheckDto } from './dto/check.dto';
import { Query } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Cloak')
@Controller('cloak')
export class CloakController {
  constructor(private readonly cloakService: CloakService) {}

  @Post('check')
  @ApiBody({ type: CheckDto })
  @ApiResponse({ status: 201, description: 'Вернуть bot или not_bot' })
  async check(@Body() dto: CheckDto) {
    const result = await this.cloakService.check(dto);
    return { result };
  }

  @Get('logs')
  @ApiResponse({ status: 200, description: 'Вернуть логи' })
  getLogs(@Query('limit') limit = '20', @Query('offset') offset = '0') {
    return this.cloakService.getLogs(Number(limit), Number(offset));
  }

  @Get('logs/export')
  @ApiResponse({ status: 200, description: 'Вернуть логи как CSV файл' })
  async exportLogs(
    @Query('limit') limit = '1000',
    @Query('offset') offset = '0',
    @Res() res: Response,
  ) {
    const csv = await this.cloakService.exportLogs(
      Number(limit),
      Number(offset),
    );
    res.header('Content-Type', 'text/csv');
    res.attachment('logs.csv');
    res.send(csv);
  }
}
