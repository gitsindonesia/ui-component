# Upgrade Guide

## `v0.10.5`

- To support SSR, change `VEditor` import from `@gits-id/ui` to `@gits-id/editor`.

```
- import {VEditor} from '@gits-id/ui/editor';
+ import {VEditor} from '@gits-id/editor';
```

## `v0.10.4`

- As of an experimental SSR support, change `VEditor` import from `@gits-id/ui` to `@gits-id/ui/editor`.

```
- import {VEditor} from '@gits-id/ui';
+ import {VEditor} from '@gits-id/ui/editor';
```
