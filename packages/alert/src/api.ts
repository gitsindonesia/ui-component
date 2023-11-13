import type {Ref} from 'vue';
import { inject} from 'vue';

export const AlertSymbol = Symbol('VAlert');

export interface AlertAPI {
  isOpen: Ref<boolean>;
  dismiss: () => void;
  color: Ref<string>;
}

export const useAlert = () => inject<AlertAPI>(AlertSymbol);
