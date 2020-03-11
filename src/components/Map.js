import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';

export default function Map() {
  const points = [];

  for(let i = 1; i < 20; i++) {
    points.push({
      latitude: 27.2038 + i * 0.001,
      longitude: 77.5011 + i * 0.001
    })
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 27.2038,
        longitude: 77.5011,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline
        coordinates={points}
      />
    </MapView>
  ) 
}

const styles = StyleSheet.create({
  map: {
    height: 280
  }
})