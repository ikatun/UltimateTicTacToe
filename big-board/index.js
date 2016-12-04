import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Row from './row';
import Finished from './finished';

export default ({onPress, rows}) => {
  if (rows === 'x' || rows === 'o') {
    return (<Finished winner={rows} />)
  }
  return (
    <View style={style.bigboard}>
      <Row onPress={(b, c, d) => onPress(0, b, c, d)} boards={rows[0]} />
      <Row onPress={(b, c, d) => onPress(1, b, c, d)} boards={rows[1]} />
      <Row onPress={(b, c, d) => onPress(2, b, c, d)} boards={rows[2]} />
    </View>
  );
};

const style = StyleSheet.create({
  bigboard: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    backgroundColor: '#F0D0F0'
  }
});
