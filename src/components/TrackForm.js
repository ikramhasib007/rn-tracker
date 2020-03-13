import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

export default function TrackForm() {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  return (
    <View style={styles.container}>
      <Spacer/>
      <Input
        placeholder="Enter name"
        autoCapitalize="none"
        autoCorrect={false}
        label="Track Name"
        value={name}
        onChangeText={changeName}
      />
      <Spacer/>
      {!recording ?
        <Button title="Start Recording" onPress={startRecording} /> :
        <Button title="Stop" onPress={stopRecording} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  }
})