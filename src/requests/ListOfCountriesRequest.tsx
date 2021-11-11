import BaseRequest from './BaseRequest';
import axios from 'axios';
import _ from 'lodash';


const schema = '';
/**
 * key base on host:port
 */
export default class ListOfCountriesRequest {
  config = 'https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST'

  async get(url: string = '', params = {}) {
    try {
      const response = await axios.get(`${this.config}`, { params });
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async _responseHandler(response: any) {
    const { data } = response;
    return data;
  }

  _errorHandler(err: any) {
    throw err;
  }

  fetchListOfCountries() {
    return this.get()
  }

}
