import { IsString, IsOptional } from 'class-validator';

export class CheckDto {
    @IsString()
    ip: string;

    @IsString()
    userAgent: string;

    @IsString()
    country: string;

    @IsOptional()
    @IsString()
    os?: string;
}