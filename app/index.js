import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryGreen: '#2ecc71',
  $white: '#FFFFFF',
});

export default () => <Home />;
