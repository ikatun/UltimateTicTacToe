import React from 'react';
import { StyleSheet, View } from 'react-native';
import Field from '../field';

export default ({onPress, fields}) => (
  <View style={style.smallrow}>
    <Field type={fields[0]} onPress={() => onPress(0)} />
    <Field type={fields[1]} onPress={() => onPress(1)} />
    <Field type={fields[2]} onPress={() => onPress(2)} />
  </View>
);

const style = StyleSheet.create({
  smallrow: {
    flex: 1,
    flexDirection: 'row'
  }
});
