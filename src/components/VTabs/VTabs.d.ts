export type VTabItem = Record<string, any>;

export interface VTabProps {
  modelValue: string | number;
  items: VTabItem[];
}
