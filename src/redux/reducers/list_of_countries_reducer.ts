import { Constants } from '../actions/list_of_countries/action_types';
import { ListOfCountriesState, DefaultAction } from '../actions/default_types';
import * as _ from 'lodash'

const initialState: ListOfCountriesState = {
  listOfCountries: [],
};

export default (state: ListOfCountriesState = initialState, action: DefaultAction) => {
  switch (action.type) {
    case Constants.FETCH_LIST_OF_COUNTRIES_SUCCEED:
      return {
        ...state,
        listOfCountries: action.data,
      };
      
    default:
      return {
        ...state,
      };
  }
};
