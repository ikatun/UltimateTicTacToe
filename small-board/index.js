import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './row';
import Finished from './finished';

export default ({onPress, rows}) => {
  if (rows === 'x' || rows === 'o') {
    return (<Finished winner={rows} />)
  }

  return (
  <View style={style.smallboard}>
    <Row fields={rows[0]} onPress={col => onPress(0, col)} />
    <Row fields={rows[1]} onPress={col => onPress(1, col)} />
    <Row fields={rows[2]} onPress={col => onPress(2, col)} />
  </View>
)};

const style = StyleSheet.create({
  smallboard: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column',
    margin: 8,
    backgroundColor: 'white'
  }
});
