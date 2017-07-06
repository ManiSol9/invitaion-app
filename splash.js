/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import App from './src/app';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

export default class splash extends Component {
  constructor(props){
    super(props);
    this.state = {
      splash:true
    };
  }
  componentDidMount(){
    var self = this
    setTimeout(function(){
      self.setState({
        splash:false
      })
     }, 3000);
  }
  render() {
    if(this.state.splash){
      return (
      <View style={{flex:1,width:windowSize.width,height:windowSize.height}}>
        <Image
           style={{width:windowSize.width,height:windowSize.height}}
           source={require('./src/img/img.png')} />
      </View>
    );
    }else{
      return(
        <App/>
        )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = splash;
