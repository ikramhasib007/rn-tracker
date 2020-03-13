import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

export default function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack, loading] = useSaveTrack();

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
      {!recording && !!locations.length && <>
        <Spacer/>
        <Button title="Save Recording" loading={loading} onPress={saveTrack} />
      </>}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  }
})