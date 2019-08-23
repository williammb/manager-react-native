import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDVEGhQkKnbydFV3VuPB6tIftFacT9IOIE',
      authDomain: 'manager-1d597.firebaseapp.com',
      databaseURL: 'https://manager-1d597.firebaseio.com',
      projectId: 'manager-1d597',
      storageBucket: 'manager-1d597.appspot.com',
      messagingSenderId: '697547242833'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
