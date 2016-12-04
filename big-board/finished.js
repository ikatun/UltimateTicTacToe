import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default ({winner}) => (
  <Image source={images[winner]} style={style.bigboard} />
);

const images = {
  x: require('../images/x.png'),
  o: require('../images/o.png')
};

const style = StyleSheet.create({
  bigboard: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
    flexDirection: 'column',
  }
});
