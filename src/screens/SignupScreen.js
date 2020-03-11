import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

export default function SignupScreen() {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>
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
      {!!state.error.signup && <Text style={styles.errorMessage}>{state.error.signup}</Text>}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({email, password})}
        />
      </Spacer>
      <NavLink
        text="Already have an account? Sign In instead."
        routeName="Signin"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
    marginHorizontal: 20
  },
  errorMessage: {
    fontSize: 15,
    color: 'red',
    textAlign: "center",
    marginTop: -15
  }
})