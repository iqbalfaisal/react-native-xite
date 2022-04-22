import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

import {AppNavigation} from './routes';
import {store} from './store';
import {SpinnerOverlay} from './components';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider>
          <AppNavigation />
          <SpinnerOverlay />
        </NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
}
