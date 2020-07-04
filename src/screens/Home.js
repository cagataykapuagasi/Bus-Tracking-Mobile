import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import MapView, { Marker } from 'react-native-maps';
import { Bus } from '~/api';
import Card from '~/components/Card';

const Home = () => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  const region = {
    latitude: 39.1667,
    longitude: 35.6667,
    latitudeDelta: 18,
    longitudeDelta: 18,
  };

  const clearSelectedBus = () => {
    setSelectedBus(null);
  };

  useEffect(() => {
    Bus.getBuses().then(({ data }) => setBuses(data));
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        onTouchStart={clearSelectedBus}
        style={styles.map}
        initialRegion={region}>
        {buses &&
          buses.map(data => (
            <Marker
              onPress={e => {
                e.stopPropagation();
                setSelectedBus(data);
              }}
              key={data.id}
              coordinate={data.location}
            />
          ))}
      </MapView>
      <Card clearSelectedBus={clearSelectedBus} item={selectedBus} />
    </View>
  );
};

export default Home;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
