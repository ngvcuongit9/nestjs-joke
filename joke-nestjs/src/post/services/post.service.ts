import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from '../dto/post.dto';
import { PostRepository } from '../repositories/post.repository';
import { PostNotFoundException } from '../exceptions/postNotFound.exception';
import { TYPE_FUNNY, TYPE_NOT_FUNNY } from '../common/type';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async getAllPosts() {
    const posts = await this.postRepository.findAll();
    return posts;
  }

  async getPostById(post_id: string) {
    try {
      const post = await this.postRepository.findById(post_id);
      if (post) {
        return post;
      } else {
        throw new NotFoundException(post_id);
      }
    } catch (error) {
      throw new PostNotFoundException(post_id);
    }
  }

  async updateReactPost(post_id: string, type: string) {
    const post = await this.postRepository.findById(post_id);
    let newModel: any = {};
    if (post) {
      if (type === TYPE_FUNNY) {
        newModel.count_funny = post.count_funny + 1;
        const post_old = JSON.parse(JSON.stringify(post));
        console.log(Object.assign(post_old, newModel));
        await this.postRepository.findByIdAndUpdate(
          post_id,
          Object.assign(post_old, newModel),
        );
        return 'done';
      }
      if (type === TYPE_NOT_FUNNY) {
        newModel.count_not_funny = post.count_not_funny + 1;
        const post_old = JSON.parse(JSON.stringify(post));
        await this.postRepository.findByIdAndUpdate(
          post_id,
          Object.assign(post_old, newModel),
        );
        return 'done';
      }
    }
    throw new PostNotFoundException(post_id);
  }

  async createPost(post: CreatePostDto) {
    const new_post = await this.postRepository.create(post);
    return new_post;
  }

  // async deletePost(post_id: string) {
  //   return await this.postRepository.deleteOne(post_id);
  // }
}
