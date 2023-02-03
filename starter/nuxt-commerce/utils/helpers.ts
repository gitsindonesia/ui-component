export const $api = <T = unknown>(...options: Parameters<typeof $fetch>) => {
  const config = useAppConfig();
  const baseURL = config.store.apiUrl;

  return $fetch<T>(options[0], {
    baseURL,
    ...options[1],
  });
};

export const toCurrency = (value: number) => {
  const config = useAppConfig();
  const currency = config.store.currency;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
};

export const starRating = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push('★');
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push('½');
    } else {
      stars.push('☆');
    }
  }
  return stars.join('');
};

export const getDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};
