import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CreatePostDto,
  UpdatePostDto,
  UpdatePostReactionDto,
} from '../dto/post.dto';
import { PostService } from '../services/post.service';


@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  @Get()
  getAllPost() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postService.createPost(post);
  }

  @Patch(':id')
  async updateReactPost(@Param('id') id: string, @Body() type: UpdatePostReactionDto) {
    console.log('hiihaha', type);
    return this.postService.updateReactPost(id, type.type);
  }

}
