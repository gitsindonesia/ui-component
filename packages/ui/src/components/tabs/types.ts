export type VTabItemProps = Record<string, any>;

export interface VTabProps {
  modelValue: string | number;
  items: VTabItemProps[];
}
