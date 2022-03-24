import {ref} from 'vue';
import {PostService, CommentService, Post, Comment} from './services';

export const useBlog = () => {
  const posts = ref<Post[]>([]);
  const post = ref<Post | null>(null);
  const relatedPosts = ref<Post[]>([]);
  const nextReading = ref<Post[]>([]);
  const comments = ref<Comment[]>([]);
  const error = ref<any>(null);

  const repo = new PostService();
  const commentRepo = new CommentService();

  const getAllPosts = async (params?: Record<string, any>) => {
    try {
      const res = await repo.all(params);
      posts.value = res.data.data;
    } catch (e: any) {
      error.value = e;
    }
  };

  const getPostById = async (id: number) => {
    try {
      const res = await repo.find(id);
      post.value = res.data;
    } catch (e: any) {
      error.value = e;
    }
  };

  const getRelatedPosts = async (postId: number, size?: number) => {
    try {
      const res = await repo.getRelatedPosts(postId, size);
      relatedPosts.value = res.data.data;
    } catch (e: any) {
      error.value = e;
    }
  };

  const getNextReading = async (postId: number, size?: number) => {
    try {
      const res = await repo.getRelatedPosts(postId, size);
      nextReading.value = res.data.data;
    } catch (e: any) {
      error.value = e;
    }
  };

  const getComments = async (postId?: number) => {
    try {
      const res = await commentRepo.all({
        post_id: postId,
      });
      comments.value = res.data.data;
    } catch (e: any) {
      error.value = e;
    }
  };

  return {
    posts,
    post,
    relatedPosts,
    nextReading,
    comments,
    getAllPosts,
    getPostById,
    getRelatedPosts,
    getNextReading,
    getComments,
  };
};
