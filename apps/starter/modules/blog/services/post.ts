import axios from 'axios';
import {CrudService} from '@gits-id/ui';

export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  body: string;
  image: string;
  createdAt: string;
  meta: {author: string; views: number; comments: number};
  imageWidth: number;
  imageHeight: number;
};

export class PostService extends CrudService<Post> {
  protected path = 'posts';

  getRelatedPosts(id: number, size?: number) {
    return axios.get(`/post/${id}/related`, {params: {size}});
  }
}
