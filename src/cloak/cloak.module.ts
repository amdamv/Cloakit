import { Module } from '@nestjs/common';
import { CloakService } from './cloak.service';
import { CloakController } from './cloak.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CloakLog, CloakLogSchema } from './schemas/cloak-log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CloakLog.name, schema: CloakLogSchema }]),
  ],
  controllers: [CloakController],
  providers: [CloakService],
})
export class CloakModule {}