import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlogModule } from './blog/blog.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://otabektolaganov69:JANQvhaUsWRAEXYL@cluster0.mhrgx.mongodb.net/'
    ),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
