import {
  put, takeLatest, call, all, fork, select,
} from 'redux-saga/effects';
import { Constants } from '../actions/list_of_countries/action_types';
import actions from '../actions/list_of_countries';
import rf from '../../requests/RequestFactory';
import * as _ from 'lodash'

interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

function* fetchListOfCountries(action: any) {
  try {
    const resp:ResponseGenerator = yield call((params) => rf.getRequest('ListOfCountriesRequest').fetchListOfCountries(params), action.params);
    yield put(actions.fetchListOfCountriesSucceed(resp));
    if(_.isFunction(action.callback)){
      action.callback(resp)
    }
  } catch (err) {
    yield put(actions.fetchListOfCountriesFailed(err));
  }
}

function* watchAllListOfCountries() {
  yield takeLatest(Constants.FETCH_LIST_OF_COUNTRIES, fetchListOfCountries);
}

export default function* rootSaga() {
  yield all([fork(watchAllListOfCountries)]);
}
