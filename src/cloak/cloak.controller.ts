import {Controller, Post, Body, Get} from '@nestjs/common';
import { CloakService } from './cloak.service';
import { CheckDto } from './dto/check.dto';
import { Query } from '@nestjs/common';

@Controller('cloak')
export class CloakController {
    constructor(private readonly cloakService: CloakService) {}

    @Post('check')
    check(@Body() dto: CheckDto) {
        const result = this.cloakService.check(dto);
        return { result };
    }



@Get('logs')
getLogs(@Query('limit') limit?: string) {
    const count = parseInt(limit) || 50;
    return this.cloakService.getLogs(count);
}
}