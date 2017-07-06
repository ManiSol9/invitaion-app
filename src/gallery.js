import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  AsyncStorage,
  Image,
  ActivityIndicator,
  Alert,
  NetInfo,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  StatusBar,
} from 'react-native';


import Confetti from 'react-native-confetti';

import Gallery from 'react-native-image-gallery';


class gallery extends React.Component {


  render() {



    return (


      <Image
          style={styles.backgroundImage}
          source={require('./img/appback.jpg')}
        >
        <Confetti ref={(node) => this._confettiView = node}/>


              <Gallery
                style={{flex: 1, height: 200,}}
                images={[
                  { source: require('./img/slide1.jpg'), dimensions: { width: 150, height: 150 } },
                  { source: require('./img/slide2.jpg'), dimensions: { width: 150, height: 150 } },
                  { source: require('./img/slide3.jpg'), dimensions: { width: 150, height: 150 } },
                  { source: require('./img/slide1.jpg'), dimensions: { width: 150, height: 150 } }
                ]}
              />



 </Image>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Imagecenter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120
  },
  stretch: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3
  },
  content: {
    color: 'white',
    lineHeight: 5,
    fontSize: 15,

  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode:'cover',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});

module.exports = gallery;
