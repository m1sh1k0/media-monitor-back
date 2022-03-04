import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { CommonDocument } from 'src/utils/common-schema';
import { UserModel } from '../user/user.schema';

@Schema({
  collection: 'feed',
  autoIndex: true,
  timestamps: true,
})
export class FeedModel extends CommonDocument {
  @Prop()
  title: string;

  @Prop({ type: Types.ObjectId, ref: UserModel.name })
  author: string;
}

export type FeedDocument = FeedModel;
export const FeedSchema = SchemaFactory.createForClass(FeedModel);
