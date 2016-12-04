import React from 'react';
import { View, StyleSheet } from 'react-native';

export default () => (
  <View style={style.unused}/>
);

const style = StyleSheet.create({
  unused: {
    flex: 1,
    borderColor: '#F0D0F0',
    borderWidth: 1
  }
});
