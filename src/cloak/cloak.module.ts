import { Module } from '@nestjs/common';
import { CloakService } from './cloak.service';
import { CloakController } from './cloak.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CloakLog, CloakLogSchema } from './schemas/cloak-log.schema';
import { CloakLogRepository } from './repo/cloak-log.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([
      { name: CloakLog.name, schema: CloakLogSchema },
    ]),
  ],
  controllers: [CloakController],
  providers: [CloakService, CloakLogRepository],
})
export class CloakModule {}
