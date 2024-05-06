import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from './src/config-store';
import AppContainer from './src/containers/appContainer';
import FlashMessage from 'react-native-flash-message';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: '#F1F2F6' }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            />
            <FlashMessage position="top" />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
