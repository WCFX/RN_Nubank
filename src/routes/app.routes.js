import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import Home from '../views/Home';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Home" component={Home} />
  </Navigator>
);
