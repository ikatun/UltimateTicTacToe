import React from 'react';
import { StyleSheet, View } from 'react-native';
import SmallBoard from '../small-board';

export default ({onPress, boards}) => {
  return (
  <View style={style.bigrow}>
    <SmallBoard rows={boards[0]} onPress={(row, col) => onPress(0, row, col)} />
    <SmallBoard rows={boards[1]} onPress={(row, col) => onPress(1, row, col)} />
    <SmallBoard rows={boards[2]} onPress={(row, col) => onPress(2, row, col)} />
  </View>
)};

const style = StyleSheet.create({
  bigrow: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: null
  }
});
