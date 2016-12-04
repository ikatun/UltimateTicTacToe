import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const images = {
  x: require('../images/x.png'),
  o: require('../images/o.png')
};

export default ({player}) => (
  <Image source={images[player]} style={style.finished}/>
);

const style = StyleSheet.create({
  finished: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
    borderColor: '#F0D0F0',
    borderWidth: 1
  }
});
