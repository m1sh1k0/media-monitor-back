import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

type T2FA = {
  phoneNumber: string;
  phoneNumberVerified: boolean;
};

@Schema({
  collection: 'users',
  autoIndex: true,
  timestamps: true,
})
export class UserModel extends Document {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop()
  description: string;
}

export type UserDocument = UserModel;
export const UserSchema = SchemaFactory.createForClass(UserModel);
