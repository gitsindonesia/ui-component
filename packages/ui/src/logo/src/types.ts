export const sizes = ['xxs', 'xs', 'sm', 'md', 'lg'] as const;
export type Sizes = typeof sizes[number] | number | string;
