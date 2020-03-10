import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text h3>Sign Up to for Tracker</Text>
      <Spacer />
      <Spacer />
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
        value={email}
      />
      <Spacer />
      <Input
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
        value={password}
      />
      <Spacer />
      <Button
        title="Sign Up"
      />
      <Spacer />
      <Text style={{fontSize: 18}}>Already have an account?</Text>
      <Text style={{fontSize: 18}}>Sign In instead.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
    marginHorizontal: 20
  }
})