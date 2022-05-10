export const inputDisabledClasses =
  'disabled:cursor-not-allowed disabled:shadow-none disabled:text-gray-400 disabled:placeholder-gray-400';

export const inputClasses =
  'border shadow-sm rounded-md text-gray-800 ' + inputDisabledClasses;

export const inputErrorClasses = `border-error-500 text-error-500
  focus-visible:ring-error-500/30 focus-visible:border-error-500 ring-error-500 focus:border-error-500 focus:ring-error-500`;

export const useInputClasses = (error = false) => {
  let className = [
    'transition duration-300 border rounded-md text-gray-800',
    'focus:border-primary-500 focus:ring-primary-500 focus:ring focus:ring-opacity-50',
    inputDisabledClasses,
  ];

  if (error) {
    className.push(inputErrorClasses);
  } else {
    className.push('border-gray-400');
  }

  return className.join(' ');
};
