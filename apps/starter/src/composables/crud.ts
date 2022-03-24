import {reactive, ref} from 'vue';
import {CrudInterface, PaginationMeta, Payload, QueryParams} from '@gits-id/ui';
import {mapMeta} from '~/utils';

export const useCrud = <E, P = Payload>(service: CrudInterface) => {
  const loading = reactive({
    items: false,
    detail: false,
    delete: false,
    create: false,
    update: false,
  });
  const search = ref('');
  const items = ref<E[]>([]);
  const item = ref<E | null>(null);
  const meta = ref<PaginationMeta>({
    total: 0,
    perPage: 10,
    currentPage: 1,
    lastPage: 1,
    firstPage: 1,
    firstPageUrl: '',
    lastPageUrl: '',
    nextPageUrl: '',
    previousPageUrl: '',
  });

  const fetchItems = async (params?: QueryParams) => {
    loading.items = true;
    const res = await service.all(params);
    loading.items = false;

    items.value = res.data.data;
    meta.value = mapMeta(res.data.meta);

    console.log(meta.value);

    return res;
  };

  const deleteItem = async (id: string) => {
    loading.delete = true;
    const res = await service.delete(id);
    loading.delete = false;

    return res.data;
  };

  const create = async (payload: P) => {
    loading.create = true;
    const res = await service.create(payload);
    loading.create = false;

    return res.data;
  };

  const fetchItem = async (id: string) => {
    loading.detail = true;
    const res = await service.find(id);
    loading.detail = false;

    item.value = res.data;

    return res;
  };

  const update = async (id: string, payload: P) => {
    loading.update = true;
    const res = await service.update(id, payload);
    loading.update = false;

    return res.data;
  };

  return {
    search,
    loading,
    items,
    item,
    meta,
    fetchItems,
    deleteItem,
    create,
    fetchItem,
    update,
  };
};
