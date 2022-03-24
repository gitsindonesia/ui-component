import {CrudService} from '@gits-id/ui';

export interface Comment {
  id?: number;
  user?: string;
  body?: string;
  time?: string;
  image?: string;
}

export class CommentService extends CrudService<Comment> {}
