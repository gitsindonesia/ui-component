export type DropdownProps = {
  modelValue: boolean;
  btnProps: any;
  label: string;
  right: boolean;
  items?: DropdownItemProps[];
};

export type DropdownItemProps = {
  text?: string;
  to?: string;
  href?: string;
  icon?: string | any;
  iconSize?: string;
  iconClass?: string;
  newTab?: boolean;
  divider?: boolean;
  nuxt?: boolean;
  disabled?: boolean;
  header?: boolean;
};
