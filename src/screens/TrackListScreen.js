import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TrackListScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>TrackListScreen</Text>
      <Button 
        title="Go to TrackDetail Screen"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})