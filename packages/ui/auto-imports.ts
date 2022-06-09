import type {ComponentResolver} from 'unplugin-vue-components/types';

/**
 * Resolver for GITS UI
 *
 * @link https://github.com/gitsindonesia/ui-component
 */
export function GITSUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^V[A-Z]/)) return {name, from: '@gits-id/ui'};
    },
  };
}
