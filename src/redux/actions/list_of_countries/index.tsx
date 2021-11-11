import { Constants } from './action_types';

export default {
  fetchListOfCountries: (params: any, callback: void) => ({
    type: Constants.FETCH_LIST_OF_COUNTRIES,
    params,
    callback,
  }),
  fetchListOfCountriesSucceed: (data: any) => ({
    type: Constants.FETCH_LIST_OF_COUNTRIES_SUCCEED,
    data,
  }),
  fetchListOfCountriesFailed: (err: any) => ({
    type: Constants.FETCH_LIST_OF_COUNTRIES_FAILED,
    err,
  }),

};
