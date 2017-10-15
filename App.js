import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Index from './appIndex' 
import configureStore from './configureStore'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
