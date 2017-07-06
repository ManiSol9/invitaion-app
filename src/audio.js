import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert,
  Text,
} from 'react-native';

import Confetti from 'react-native-confetti';



class RNConfetti extends Component {
  componentDidMount() {

       this._confettiView.startConfetti();

        setInterval( () => {
            this._confettiView.startConfetti()
          }, 10000);


 }
  render() {
    return (
    <View style={styles.container}>
      <Confetti colors={'red'} timeout={5}  ref={(node) => this._confettiView = node}/>
    </View>
  );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RNConfetti;
