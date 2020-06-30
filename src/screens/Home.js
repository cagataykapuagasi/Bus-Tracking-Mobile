import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { images, fonts, colors, width, height } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import MapView, { Marker } from 'react-native-maps';
import { getLocation } from '~/utils/location';
import { Bus } from '~/api';

const latitudeDelta = 0.002;

const Home = () => {
  const region = {
    latitude: 39.1667,
    longitude: 35.6667,
    latitudeDelta: 18,
    longitudeDelta: 18,
  };

  useEffect(() => {
    Bus.getBuses()
      .then(data => console.warn(data))
      .catch(e => console.log(e));
    //getLocation().then(region => this.setState({ region }));
  }, []);

  return (
    <MapView style={styles.map} initialRegion={region}>
      <Marker coordinate={region} />
    </MapView>
  );
};

export default Home;

const styles = ScaledSheet.create({
  map: {
    flex: 1,
  },
});
