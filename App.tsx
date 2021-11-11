import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Router from './src/router'
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './src/custom.d';
// redux
import allReducers from './src/redux/reducers';
// redux saga
import rootSaga from './src/redux/sagas/root_saga';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

store.dispatch({
  type: '@@__INIT__',
});


function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
