import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from './Spacer';

export default function AuthForm({
  headerText = 'Go...',
  errorMessage = '',
  onSubmit = () => {},
  submitButtonText = 'Submit'
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setEmail}
          value={email}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setPassword}
          value={password}
        />
      </Spacer>
      {!!errorMessage && <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      }
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({email, password})}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 15,
    color: 'red'
  }
})