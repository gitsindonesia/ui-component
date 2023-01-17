import {FieldOptions, useField} from 'vee-validate';
import {computed, ref, toRefs, watch} from 'vue';

export type ValidationMode = 'eager' | 'aggressive';

type Emit = (event: any, ...args: any[]) => void;

interface Props extends Record<string, any> {
  validationMode: ValidationMode;
}

export function useFormValue<TValue extends any>(
  props: Props,
  emit: Emit,
  veeValidateOptions?: Partial<FieldOptions<TValue>>,
  onUncontrolledValueChange?: (value: any) => void,
) {
  const {modelValue, name, rules} = toRefs(props);

  const isEagerValidation = computed(() => {
    return props.validationMode === 'eager';
  });

  const inputId = computed(() => {
    return props.id || props.name;
  });

  const input = ref();
  const initialValue = props.modelValue || props.value;

  const {
    value: vvValue,
    errorMessage,
    handleChange,
    setValue,
    meta,
    validate,
  } = useField(name, rules, {
    initialValue,
    validateOnValueUpdate: !isEagerValidation.value,
    ...veeValidateOptions,
  });

  const uncontrolledValue = ref(initialValue);

  watch(modelValue, (val) => {
    uncontrolledValue.value = val;

    if (name.value) {
      setValue(val);
    }
  });

  watch(
    vvValue,
    (val) => {
      // only use vee validate value if name is defined
      // to prevent whole form value being passed as field value
      if (name.value) {
        uncontrolledValue.value = val;
      }
    },
    {immediate: true},
  );

  watch(
    uncontrolledValue,
    (val) => {
      if (name.value) {
        setValue(val!);
      }

      if (onUncontrolledValueChange) {
        onUncontrolledValueChange(val);
      } else {
        emit('update:modelValue', val);
      }
    },
    {
      deep: true,
    },
  );

  const validationListeners = computed(() => {
    // If the field is valid or have not been validated yet
    // lazy
    if (!errorMessage.value && isEagerValidation.value) {
      return {
        blur: handleChange,
        change: handleChange,
        // disable `shouldValidate` to avoid validating on input
        input: (e: any) => handleChange(e, false),
      };
    }
    // Aggressive
    return {
      blur: handleChange,
      change: handleChange,
      input: handleChange, // only switched this
    };
  });

  const clear = () => {
    uncontrolledValue.value = '';

    emit('clear');

    if (input.value) {
      input.value.focus();
    }
  };

  const handleBlur = () => {
    if (isEagerValidation.value) {
      validate();
    }
  };

  return {
    input,
    isEagerValidation,
    uncontrolledValue,
    validationListeners,
    vvValue,
    errorMessage,
    meta,
    inputId,
    handleChange,
    setValue,
    clear,
    validate,
    handleBlur,
  };
}
