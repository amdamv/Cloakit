import { IsString, IsOptional, IsIP } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckDto {
  @ApiProperty({ example: '193.163.187.238' })
  @IsIP()
  ip: string;

  @ApiProperty({ example: 'curl/7.68.0' })
  @IsString()
  userAgent: string;

  @ApiProperty({ example: 'UA' })
  @IsString()
  country: string;

  @ApiProperty({ example: 'MacOS' })
  @IsOptional()
  @IsString()
  os?: string;
}
