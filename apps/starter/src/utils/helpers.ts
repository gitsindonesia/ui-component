import {PaginationMeta, RawPaginationMeta} from '@gits-id/ui';
import dayjs from 'dayjs';

export const mapMeta = (meta: RawPaginationMeta): PaginationMeta => {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    firstPageUrl: meta.first_page_url,
    lastPageUrl: meta.last_page_url,
    nextPageUrl: meta.next_page_url,
    previousPageUrl: meta.previous_page_url,
  };
};

export const localDate = (str: string, locale = 'id') => {
  return dayjs(str).locale(locale).format('DD/MM/YYYY HH:mm:ss');
};

export const normalizeDate = (str: string) => {
  const date = str?.replace('T', ' ').replace('.000+00:00', '');
  return dayjs(date).toDate();
};
