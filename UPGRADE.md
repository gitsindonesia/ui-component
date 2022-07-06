# Upgrade Guide

## `v0.10.4`

- In order to support SSR, we decide to separate `VEditor` export from `@gits-id/ui` to `@gits-id/ui/editor`.

```
- import {VEditor} from '@gits-id/ui';
+ import {VEditor} from '@gits-id/ui/editor';
```
