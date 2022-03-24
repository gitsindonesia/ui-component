import {CrudService} from '@gits-id/services';
import {useCrud} from '~/composables/crud';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}

export interface Role {
  name: string;
  description: string;
}

export class UserService extends CrudService<User> {
  protected path = 'users';
}

export type UserPayload = Record<string, any>;

export const useUser = () => useCrud<User, UserPayload>(new UserService());
