import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloakModule } from './cloak/cloak.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:27017/cloak_db'), //имя контейнера
    CloakModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
