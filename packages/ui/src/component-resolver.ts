import type {ComponentResolver} from 'unplugin-vue-components/types';

/**
 * Resolver for Morpheme UI
 *
 * @link https://github.com/gitsindonesia/ui-component
 */
export function MorphemeUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^V[A-Z]/)) return {name, from: '@morpheme/ui'};
    },
  };
}
