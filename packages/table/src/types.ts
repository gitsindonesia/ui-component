import Pagination from '@gits-id/pagination';

type VPagination = InstanceType<typeof Pagination>['$props'];

export interface VDataTableItem {
  selected?: boolean;
  [key: string]: any;
}

export interface VDataTableHeader {
  text: string;
  value: string;
  align?: 'left' | 'center' | 'right' | string;
  sortable?: false;
  class?: string;
  tdClass?: string;
  freeze?: boolean;
  positionFreeze?: 'left' | 'right';

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
