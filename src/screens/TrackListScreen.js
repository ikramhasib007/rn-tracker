import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TrackListScreen({ navigation }) {

  return (
    <View>
      <Text style={{fontSize: 50}}>TrackListScreen</Text>
      <Button 
        title="Go to SignUp Screen"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})