import { Schema, Document } from 'mongoose';

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    content: String,
    count_funny: { type: Number, default: 0 },
    count_not_funny: { type: Number, default: 0 },
    // created_at: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
    // timestamps: {
    //   createdAt: 'created_at',
    //   updatedAt: 'updated_at',
    // },
    collection: 'posts',
  },
);

export { PostSchema };

export interface Post extends Document {
  title: string;
  description: string;
  content: string;
  count_funny: number;
  count_not_funny: number;
}
