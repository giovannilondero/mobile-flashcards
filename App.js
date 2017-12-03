import { Constants } from 'expo';
import { green } from './src/utils/colors';
import { Provider } from 'react-redux';
import { setLocalNotification } from './src/utils/notifications';
import { StatusBar, View } from 'react-native';
import { Tabs, DeckFlow } from './App.nav';
import React from 'react';
import store from './src/store';

const CustomStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={green} barStyle="light-content" />
          <DeckFlow />
        </View>
      </Provider>
    );
  }
}

export default App;
