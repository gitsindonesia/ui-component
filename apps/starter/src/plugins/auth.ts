import {authOptions} from '~/config';
import {createPiniaAuth as createAuth} from '@gravitano/vue-auth';
import axios from 'axios';
import router from '~/router';

export const useAuth = () => createAuth(authOptions, router, axios)();
