// import '../libs/_mockLocation';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import Map from '../components/Map';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function TrackCreateScreen() {
  const [err, setErr] = useState(null);
  const [location, setLocation] = useState({});
  
  async function startWatching() {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') return setErr('Permission to access location was denied');
      let location = await Location.getCurrentPositionAsync({});
      console.log('location: ', location);
      // await Location.watchPositionAsync({
      //   accuracy: Location.Accuracy.BestForNavigation,
      //   timeInterval: 1000,
      //   distanceInterval: 10
      // }, location => {
      //   console.log('location: ', location);

      // })
    } catch (e) {
      setErr(e);
    }
  }

  useEffect(() => {
    if(Platform.OS === 'android' && !Constants.isDevice) return setErr('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
    startWatching();
  }, [err]);

  return (
    <>
      <Map />
      {!!err && <Text style={styles.errorMessage}>{err}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    marginHorizontal: 10,
    color: '#636e72'
  }
})