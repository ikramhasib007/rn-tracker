import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

export default function SigninScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text h3>Sign In to for Tracker</Text>
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
        title="Sign In"
      />
      <Spacer />
      <Text style={{fontSize: 18}}>Don't have an account?</Text>
      <Text style={{fontSize: 18}}>Go back to sign up.</Text>
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