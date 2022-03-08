import axios from 'axios';

export type GenericPayload = Record<string, any>;
export type CreatePayload = Record<string, any>;
export type UpdatePayload = Record<string, any>;
export type CrudOptions = {
  generic: GenericPayload;
  create: CreatePayload;
  update: UpdatePayload;
};

export type CrudPayload<T = unknown> = Record<string, T>;
export type Payload = Record<string, any>;
export type QueryParams = Record<string, any>;

export type ResponseWithMeta<T> = {
  data: T;
  meta: RawPaginationMeta;
};

export interface RawPaginationMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  previous_page_url?: string;
}

export interface PaginationMeta {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string;
  previousPageUrl?: string;
}

export interface CrudInterface {
  all<T = CrudPayload>(params?: T): Promise<any>;

  create<T = CrudPayload>(payload: T): Promise<any>;

  find<T = string>(id: T): Promise<any>;

  update<T = string, P = CrudPayload>(id: T, payload: P): Promise<any>;

  delete<T = string>(id: T): Promise<any>;
}

export abstract class CrudService<E> implements CrudInterface {
  protected path = '';

  async all<T = GenericPayload>(params: T) {
    return axios.get<ResponseWithMeta<E[]>>(this.path, {params});
  }

  async create<T = CreatePayload>(payload: T) {
    return axios.post(this.path, payload);
  }

  async find<T = string>(id: T) {
    return axios.get<E>(`${this.path}/${id}`);
  }

  async update<T = string, U = UpdatePayload>(id: T, payload: U) {
    return axios.put(`${this.path}/${id}`, payload);
  }

  async delete<T = string, R = any>(id: T) {
    return axios.delete<R>(`${this.path}/${id}`);
  }
}
