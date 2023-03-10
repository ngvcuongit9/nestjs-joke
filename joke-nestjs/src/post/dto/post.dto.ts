import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  description: string;
  content: string;
}

export class UpdatePostDto {
  @IsNotEmpty()
  id: number;
  content: string;
  @IsNotEmpty()
  title: string;
}

export class UpdatePostReactionDto {
  @IsNotEmpty()
  type: string;
}

export class PaginationPostDto {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;

  @IsNotEmpty()
  start: string;
}
