import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SigninScreen({ navigation }) {

  return (
    <View>
      <Text style={{fontSize: 50}}>SigninScreen</Text>
      <Button 
        title="Go to SignUp Screen"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})