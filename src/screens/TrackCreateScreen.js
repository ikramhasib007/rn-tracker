import '../libs/_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';

export default function TrackCreateScreen() {
  const { addLocation } = useContext(LocationContext);
  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused, addLocation);

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