/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import type {Node} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './Store';
import Navigation from './Navigator/index';
Icon.loadFont();
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
