import type {VPagination} from '@gits-id/pagination/src/types';

export interface VDataTableItem {
  selected?: boolean;
  [key: string]: any;
}

export interface VDataTableHeader {
  text: string;
  value: string;
  align?: string;
  sortable?: false;
  class?: string;
  [key: string]: any;
}

export type SortDirection = 'asc' | 'desc' | '';

export interface VDataTableSortEvent {
  sortBy: string;
  direction: SortDirection;
}

export interface VDataTableProps {
  items: VDataTableItem[];
  headers: VDataTableHeader[];
  disableSorting: boolean;
  pagination: VPagination;
  loading: boolean;
  search: string;
  searchBy: string | string[];
  loadingText: string;
  noDataText: string;
  serverSide: boolean;
  footerColor: string;
  sortBy: string;
  sortDirection: string;
  itemsPerPage: number;
}
