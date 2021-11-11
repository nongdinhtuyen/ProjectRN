import { all } from 'redux-saga/effects';
import watchAllListOfCountries from './list_of_countries_saga'

export default function* rootSaga() {
  yield all([
    watchAllListOfCountries(),
  ]);
}