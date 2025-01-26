import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import { Replies } from "./replies.entity";

@Schema({ timestamps: false })
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  blogId: ObjectId;

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

export const CommentSchema = SchemaFactory.createForClass(Comment);
