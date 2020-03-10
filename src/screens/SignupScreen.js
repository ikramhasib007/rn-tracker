import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

export default function SignupScreen() {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up to for Tracker"
        submitButtonText="Sign Up"
        onSubmit={signup}
        errorMessage={state.errorMessage}
      />
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
    marginHorizontal: 10
  }
})