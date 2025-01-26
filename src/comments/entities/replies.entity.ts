import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

@Schema({ timestamps: false })
export class Replies {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  commentId: ObjectId;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ default: 0 })
  likes: number;

  @Prop()
  likedmembers: string[];

  @Prop({ default: 0 })
  replycount: number;

  @Prop()
  replies: Replies[];
}

export const RepliesSchema = SchemaFactory.createForClass(Replies);
