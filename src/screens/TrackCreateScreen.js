import '../libs/_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

export default function TrackCreateScreen() {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const isFocused = useIsFocused();
  const callback = useCallback(location => {
    addLocation(location, recording);
  }, [recording]);
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <>
      <Map />
      {!!err && <Text style={styles.errorMessage}>{err}</Text>}
      <TrackForm />
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    marginHorizontal: 10,
    color: '#636e72'
  }
})