import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IRootStack} from './types';
import {HomeScreen} from '../screens';

const Stack = createNativeStackNavigator<IRootStack>();

function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
