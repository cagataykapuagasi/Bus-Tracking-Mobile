import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { images, fonts, colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import MapView from 'react-native-maps';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Starter Kit</Text>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
