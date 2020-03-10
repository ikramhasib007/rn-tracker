import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ({ children }) {
  return (
  <View style={styles.spacer}>{children}</View>
  )
}

const styles = StyleSheet.create({
  spacer: {
    margin: 10
  }
})