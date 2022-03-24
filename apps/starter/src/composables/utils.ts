import {computed} from 'vue';

export type Actions = 'edit' | 'create' | 'view';

export const useFormAction = (action: Actions | string) => {
  const isEdit = computed(() => action == 'edit');
  const isCreate = computed(() => action == 'create');
  const isView = computed(() => action == 'view');

  return {isEdit, isCreate, isView};
};
