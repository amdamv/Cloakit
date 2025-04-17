import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloakLog } from 'src/cloak/schemas/cloak-log.schema';

@Injectable()
export class CloakLogRepository {
  constructor(
    @InjectModel(CloakLog.name)
    private readonly model: Model<CloakLog>,
  ) {}

  async save(data: Partial<CloakLog>) {
    return this.model.create(data);
  }

  async findAll(limit: number, offset: number) {
    return this.model
      .find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .exec();
  }
}
