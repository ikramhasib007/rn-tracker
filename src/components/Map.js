import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

export default function Map() {
  const { state: { currentLocation, locations } } = useContext(LocationContext);
  
  if(!currentLocation) return <View style={{height: styles.map.height, justifyContent: "center"}}><ActivityIndicator size={30} /></View>

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(41,128,185 ,1)"
        fillColor="rgba(41,128,185 ,0.3)"        
      />
        <Polyline
          coordinates={locations.map(loc => loc.coords)}
        />
    </MapView>
  ) 
}

const styles = StyleSheet.create({
  map: {
    height: 280
  }
})