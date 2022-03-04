import { Document } from 'mongoose';
import { Prop } from '@nestjs/mongoose';

export class CommonDocument extends Document {
  @Prop({ type: Date, immutable: true })
  createdAt: Date;

  @Prop({ type: Number, select: false })
  __v: number;
}
