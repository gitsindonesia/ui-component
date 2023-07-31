import Pagination from '@morpheme/pagination';

type VPagination = InstanceType<typeof Pagination>['$props'];

export interface VDataTableItem extends Record<string, any> {
  selected?: boolean;
}

export interface VDataTableHeader extends Record<string, any> {
  text: string;
  value: string;
  align?: 'left' | 'center' | 'right' | string;
  sortable?: false;
  class?: string;
  tdClass?: string;
  freeze?: boolean;
  positionFreeze?: 'left' | 'right';
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
