import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

export default function SigninScreen() {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign In For Tracker</Text>
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
      {!!state.error.signin && <Spacer>
        <Text style={styles.errorMessage}>{state.error.signin}</Text>
      </Spacer>}
      <Spacer>
        <Button
          title="Sign In"
          onPress={() => signin({email, password})}
        />
      </Spacer>
      <NavLink
        text="Don't have an account? Go back to sign up."
        routeName="Signup"
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
    textAlign: "center"
  }
})