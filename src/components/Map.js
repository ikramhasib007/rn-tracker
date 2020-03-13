import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

export default function Map() {
  const { state: { currentLocation } } = useContext(LocationContext);
  
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
      {/* <Polyline
        coordinates={points}
      /> */}
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(22, 160, 133,1.0)"
        fillColor="rgba(22, 160, 133,0.2)"        
      />
    </MapView>
  ) 
}

const styles = StyleSheet.create({
  map: {
    height: 280
  }
})