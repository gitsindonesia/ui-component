import axios from 'axios';
import {createPiniaAuth} from '@gravitano/vue-auth';
import {authOptions} from '~/config';
import router from '~/router';

export const useAuth = () => createPiniaAuth(authOptions, router, axios)();
