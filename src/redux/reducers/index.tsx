import { combineReducers } from "redux";
import listOfCountries from './list_of_countries_reducer'

const allReducers = combineReducers({
    listOfCountries,
    
});

export default allReducers;