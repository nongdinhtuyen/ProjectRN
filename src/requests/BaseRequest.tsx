import consts from "../consts";
import React from "react";
import _ from 'lodash'

export default class BaseRequest {
  version = "v1/cryptotrading";

  prefix () {
    return '';
  }

  async get(url: string = '', params = {}) {
    try {
      const response = await global.axios.get(`${this.version}/${url}`, { params });
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put (url: string = '', data = {}) {
    try {
      const response = await global.axios.put(`${this.version}/${url}`, data);
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post(url: string = '', data = {}) {
    try {
      const response = await global.axios.post(`${this.version}/${url}`, data);
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del(url: string = '', params = {}) {
    try {
      const response = await global.axios.delete(`${this.version}/${url}`, params);
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async _responseHandler (response: any) {
    const {data} = response;
    let errorCode = global._.get(data, 'error.code', 200);

    if (errorCode >= 400) {
      throw 'Request failed';
    }

    return data;
  }

  _errorHandler(err: any) {
   
    throw err;
  }

}
