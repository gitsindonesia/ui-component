import {Post, PostService} from '@modules/blog';
import {useCrud} from '~/composables/crud';

export const usePost = () => useCrud<Post>(new PostService());
