import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/app.routes';

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#620385" />
    <Routes />
  </NavigationContainer>
);
