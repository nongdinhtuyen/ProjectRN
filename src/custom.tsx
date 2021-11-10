import axios, {AxiosInstance} from 'axios';
import _ from 'lodash'
import qs from 'qs';
import { BASE_URL } from './consts'

declare global {
  var axios: AxiosInstance
}

// declare var global: any;

global.axios = axios.create({
  baseURL: BASE_URL,
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

global._ = _;
