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


var SideMenu = require('react-native-side-menu')
var windowSize = Dimensions.get('window');
var Platform = require('Platform');

class venue extends React.Component {


  render() {



    return (


      <Image
          style={styles.backgroundImage}
          source={require('./img/appback.jpg')}
        >

        <Confetti ref={(node) => this._confettiView = node}/>



<View style={styles.Imagecenter}>

<Text style={styles.text}>

సుముహుర్తం

</Text>

<Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)'
,  fontSize:16, fontWeight:'bold', height: 100, marginTop:15, width:320,color:'white',textAlign:'center'}}>

ది. 18-6-2017 ఆదివారం రాత్రి గం. 12-19 ని.లకు (తె. సోమవారం)

</Text>

</View>


<View style={styles.Imagecenter}>


<Text style={styles.text}>

కళ్యణ వెదిక

</Text>

<Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)'
,  fontSize:16, fontWeight:'bold', height: 100, marginTop:15, width:320,color:'white',textAlign:'center'}}>

కాకినాడ, భానుగుడి సెంటర్, అయ్యఫ్ప స్వామి గుడి వద్దగల పొలిస్ కన్వెన్షన్ హల్ (కళ్యణ మండపము)

</Text>

</View>


<View style={styles.Imagecenter}>

<Text style={styles.text}>

విందు

</Text>

<Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)'
,  fontSize:16, fontWeight:'bold', height: 100, marginTop:15, width:320,color:'white',textAlign:'center'}}>

ది. 18-6-2017 ఆదివారం రాత్రి 6 గం.ల నుండి కళ్యణ మండపమ వద్ద

</Text>

</View>


<View style={styles.Imagecenter}>

<Text style={styles.text}>

వినోదం

</Text>


<Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)'
,  fontSize:16, fontWeight:'bold', height: 100, marginTop:15, width:320, color:'white',textAlign:'center'}}>

అమ్రుత వాద్యబృందం

</Text>

</View>


<View style={styles.Imagecenter}>


</View>



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
    height: 120,
    top: 40,
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

module.exports = venue;
