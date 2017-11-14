import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes'
import { AlertProvider } from './components/Alert'

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

export default () => <AlertProvider><Navigator /></AlertProvider>;