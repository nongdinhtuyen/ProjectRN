import axiosLib from 'axios';
import * as _ from 'lodash'
import qs from 'qs';
import { BASE_URL } from './consts'

declare global {
  var axios: any;
}
window.axios = axiosLib.create({
  baseURL: BASE_URL,
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});


