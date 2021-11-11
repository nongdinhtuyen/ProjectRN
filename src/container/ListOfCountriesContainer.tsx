import { connect } from 'react-redux';
import ListOfCountriesScreen from '../screens/ListOfCountriesScreen';
import actions from '../redux/actions/list_of_countries';

const mapStateToProps = (state: any) => ({
  listOfCountries: state.listOfCountries.listOfCountries
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchListOfCountries: (params?: any, callback?: void) => {
    dispatch(actions.fetchListOfCountries(params, callback));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCountriesScreen);
