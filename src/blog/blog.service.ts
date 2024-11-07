import { Injectable } from '@nestjs/common'
import { BlogDto } from './blog.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Blog, BlogDocument } from './blog.schema'
import { Model } from 'mongoose'

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getAllBlogs() {
    return await this.blogModel.find()
  }

  async create(dto: BlogDto) {
    return await this.blogModel.create(dto)
  }

  async getById(id: string) {
    return await this.blogModel.findById(id)
  }

  async updateById(id: string, dto: BlogDto) {
    return await this.blogModel.findByIdAndUpdate(id, dto, { new: true })
  }

  async delete(id: string) {
    return await this.blogModel.findByIdAndDelete(id)
  }
}
