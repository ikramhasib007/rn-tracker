import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function (shouldTrack, callback) {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber = null;
    async function startWatching() {
      try {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') return setErr('Permission to access location was denied');
        // let location = await Location.getCurrentPositionAsync({});
        subscriber = await Location.watchPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, callback );
      } catch (e) {
        setErr(e);
      }
    }

    // if(Platform.OS === 'android' && !Constants.isDevice) {
    //   setErr('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
    // } else 
    if(shouldTrack) {
      startWatching();
    } else {
      if(subscriber) subscriber.remove();
      subscriber = null;
    }

    return function cleanup() {
      if(subscriber) subscriber.remove();
      subscriber = null;
      setErr(null);
    }
  }, [shouldTrack, callback]);

  return [err]
}