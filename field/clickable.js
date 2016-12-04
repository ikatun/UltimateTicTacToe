import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

export default ({onPress, player, who}) => (
  <TouchableHighlight onPress={() => onPress()} style={styles[who].clickable}>
    <View style={{flex: 1}}/>
  </TouchableHighlight>
);

const styles = {
  x: StyleSheet.create({
    clickable: {
      flex: 1,
      backgroundColor: 'red',
      margin: 1,
      opacity: 0.5
    }
  }),
  o: StyleSheet.create({
    clickable: {
      flex: 1,
      backgroundColor: 'blue',
      margin: 1,
      opacity: 0.5
    }
  })
};
