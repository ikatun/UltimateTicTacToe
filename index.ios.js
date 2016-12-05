import React, { Component } from 'react';
import { AppRegistry, View, Button } from 'react-native';
import UltimateTicTacToe from './ultimate-tic-tac-toe';

class GameScene extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.05}}>
        </View>
        <Button style={{flex: 0.1}} title="Reset" onPress={() => this.game.reset()} />
        <View style={{flex: 0.85}}>
          <UltimateTicTacToe ref={(game) => this.game = game}/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('UltimateTicTacToe', () => GameScene);
