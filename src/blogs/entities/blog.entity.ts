import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Comment } from "src/comments/entities/comment.entity";

@Schema({ timestamps: false })
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  tags: string[];

  @Prop()
  author: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ default: 0 })
  likes: number;

  @Prop()
  likedmembers: string[];

  @Prop({ default: 0 })
  commentscount: number;

  @Prop()
  comments: Comment[];
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
