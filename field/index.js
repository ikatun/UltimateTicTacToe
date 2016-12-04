import React from 'react';
import Finished from './finished';
import Clickable from './clickable';
import Unused from './unused';

export const images = {
  x: require('../images/x.png'),
  o: require('../images/o.png')
};

export default ({onPress, type}) => {
  if (type === 'x' || type === 'o') {
    return (<Finished player={type} />);
  }

  if (type === 'unused') {
    return (<Unused />)
  }

  if (type.clickable) {
    return (<Clickable onPress={() => onPress()} who={type.clickable}/>)
  }
}
