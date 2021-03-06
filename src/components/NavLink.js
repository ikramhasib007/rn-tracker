import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import * as RootNavigation from '../libs/RootNavigation';

export default function NavLink({ text, routeName }) {

  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)} >
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    textAlign: "center",
    color: '#0059BF',
    fontSize: 16
  }
})