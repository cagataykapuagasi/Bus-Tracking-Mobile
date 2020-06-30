import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Modal, Router } from 'react-native-router-flux';
import { Provider } from 'mobx-react';
import { Home } from './src/screens';
import { colors } from 'res';
import RNBootSplash from 'react-native-bootsplash';
import { store } from './src/store';

export default class App extends Component {
  componentDidMount() {
    store
      .init()
      .then(() => {
        //
      })
      .catch(() => {
        //
      })
      .finally(() => RNBootSplash.hide({ duration: 250 }));
  }

  render() {
    return (
      <Provider store={store}>
        <Router
          sceneStyle={styles.scene}
          titleStyle={styles.title}
          tintColor={colors.headerTint}
          headerTintColor={colors.headerTint}>
          <Scene>
            <Scene hideNavBar component={Home} initial key="home" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: colors.background,
  },
  tab: {
    backgroundColor: colors.lightGray,
  },
});
