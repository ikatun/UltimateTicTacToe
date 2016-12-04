import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default ({winner}) => (
  <Image source={images[winner]} style={style.smallboard} />
);

const images = {
  x: require('../images/x.png'),
  o: require('../images/o.png')
};

const style = StyleSheet.create({
  smallboard: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
    flexDirection: 'column',
    margin: 8,
    backgroundColor: 'white'
  }
});