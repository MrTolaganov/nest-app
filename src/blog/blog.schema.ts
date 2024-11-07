import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type BlogDocument = HydratedDocument<Blog>

@Schema()
export class Blog {
  @Prop({ required: true }) title: string
  @Prop({ required: true }) except: string
  @Prop({ required: true }) description: string
}

export const BlogSchema = SchemaFactory.createForClass(Blog)
