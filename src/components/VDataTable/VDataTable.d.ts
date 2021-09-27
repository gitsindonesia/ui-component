import type {PropType} from 'vue';

export interface VDataTableItem {
  selected?: boolean;
  [key: string]: any;
}

export interface VDataTableHeader {
  [key: string]: any;
}

export interface VDataTableSortEvent {
  sortBy: string;
  direction: 'asc' | 'desc' | '';
}

export interface VDataTableProps {
  items: VDataTableItem[];
  headers: VDataTableHeader[];
  itemsPerPage: number;
  disableSorting: boolean;
  pagination: VPagination;
  loading: boolean;
  search: string;
  searchBy: string | string[];
  loadingText: string;
  noDataText: string;
  serverSide: boolean;
  sortBy: string;
  sortDirection: string;
  itemsPerPage: number;
}
