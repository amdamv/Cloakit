import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class CloakLog extends Document {
    @Prop() ip: string;
    @Prop() userAgent: string;
    @Prop() country: string;
    @Prop() os?: string;
    @Prop() result: 'bot' | 'not_bot';
}

export const CloakLogSchema = SchemaFactory.createForClass(CloakLog);