import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

EStyleSheet.build({
  $primaryGreen: '#2ecc71',
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
  $darkText: '#343434',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E768F',
});

export default () => (
  <AlertProvider>
    <Provider store={store}>
      <Navigator onNavigationStateChange={null} />
    </Provider>
  </AlertProvider>
);