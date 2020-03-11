import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

export default function AccountScreen() {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Button
          title="Sign Out"
          onPress={signout}
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
  }
})