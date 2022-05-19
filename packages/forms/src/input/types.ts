import type {Sizes} from '@gits-id/utils';

export type VInputProps = {
  value: string | number;
  modelValue: string | number;
  type: string;
  name: string;
  error: boolean;
  errorMessages: string[];
  readonly: boolean;
  disabled: boolean;
  size: Sizes;
  noShadow?: boolean;
  text?: boolean;
};
