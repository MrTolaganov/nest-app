import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { BlogDto } from './blog.dto'
import { BlogService } from './blog.service'

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAll() {
    return await this.blogService.getAllBlogs()
  }

  @HttpCode(201)
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() dto: BlogDto) {
    return await this.blogService.create(dto)
  }

  @HttpCode(200)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.blogService.getById(id)
  }

  @HttpCode(200)
  @Patch(':id')
  async updateById(@Param('id') id: string, @Body() dto: BlogDto) {
    return await this.blogService.updateById(id, dto)
  }

  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.blogService.delete(id)
  }
}
