import { Module } from '@nestjs/common';
import { CloakModule } from './cloak/cloak.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL), //имя контейнера
    CloakModule,
  ],
})
export class AppModule {}
