import type {App} from 'vue';

export type UserPlugin = (ctx: {app: App}) => void;
