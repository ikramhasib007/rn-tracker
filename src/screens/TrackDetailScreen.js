import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

export default function TrackDetailScreen({ navigation, route }) {
  const { state: { tracklist } } = useContext(TrackContext);

  const track = tracklist.find(t => t._id === route.params._id);
  const initialCoords = track.locations[0].coords;

  return <>
    <Text style={{fontSize: 30, margin: 10}}>{track.name}</Text>
    <MapView
      style={styles.map}
      initialRegion={{
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        ...initialCoords
      }}
    >
      <Polyline coordinates={track.locations.map(loc => loc.coords)} />
    </MapView>
  </>
}

const styles = StyleSheet.create({
  map: {
    height: 280
  }
})