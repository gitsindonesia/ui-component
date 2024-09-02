export const remToPx = (rem: string) => {
  if (rem.includes('px')) return rem;

  return +rem.replace('rem', '') * 16 + 'px';
};
