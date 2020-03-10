import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import * as RootNavigation from '../libs/RootNavigation';

export default function NavLink({ text, routeName }) {

  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)} >
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: '#0059BF',
    fontSize: 16
  }
})