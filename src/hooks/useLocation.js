import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function (shouldTrack, callback) {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  async function startWatching() {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') return setErr('Permission to access location was denied');
      // let location = await Location.getCurrentPositionAsync({});
      const subscription = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback );
      setSubscriber(subscription);
    } catch (e) {
      setErr(e);
    }
  }

  useEffect(() => {
    if(Platform.OS === 'android' && !Constants.isDevice) return setErr('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
    if(shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err]
}