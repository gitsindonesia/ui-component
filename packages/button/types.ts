import {Colors} from '../../types';
import {Sizes} from '@gits-id/utils';

export type VBtnProps = {
  label?: string;
  color: Colors;
  outlined: boolean;
  rounded: boolean;
  ring: boolean;
  disabled: boolean;
  text: boolean;
  size: Sizes;
  tile: boolean;
  icon: boolean;
  loading: boolean;
};
