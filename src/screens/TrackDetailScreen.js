import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

export default function TrackDetailScreen({ navigation, route }) {
  const { state: { tracklist } } = useContext(TrackContext);

  const track = tracklist.find(t => t._id === route.params._id);

  return (
    <Text style={{fontSize: 50}}>{track.name}</Text>
  )
}

const styles = StyleSheet.create({

})