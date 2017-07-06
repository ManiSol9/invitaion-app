const React = require('react');
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  AlertIOS,
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';



module.exports = class Menu extends Component {
  constructor(props){
      super(props);
    }
    static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (


      <View style={styles.container}>
        <View style={{width: window.width/2,height: window.height/4,marginLeft: 50, marginTop:20,}}>

        <Image
            style={styles.imagelogo}
            source={require('./img/Ganesh.png')}
          />

        </View>
        <View style={{width: window.width,height:window.height- (window.height/3)}}>
          <View style={{flex:1,marginLeft:0}}>
            <ScrollView scrollsToTop={false} style={styles.menu}>

              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Dashboard')}>
              <Image style={styles.avatar} source={require('./img/icon.png')}/>
                <Text style={styles.name} >వధువరులు</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('gallery')}>
              <Image style={styles.avatar} source={require('./img/icon.png')}/>

                <Text style={styles.name} >నిర్చ్గితార్థాపు చిత్రలు</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('time')}>
              <Image style={styles.avatar} source={require('./img/icon.png')}/>

                <Text style={styles.name} >శుభ ముహుర్థం</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer} onPress={() => Linking.openURL('https://www.google.co.in/maps/dir/Police+Kalyana+Mandapam//@16.9686205,82.2365574,16.53z/data=!4m8!4m7!1m5!1m1!1s0x0:0x6e36d10f8912f8cf!2m2!1d82.2362316!2d16.9722462!1m0')}>
              <Image style={styles.avatar} source={require('./img/icon.png')}/>

                <Text style={styles.name} >వివాహ వెదికకు దారి</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
            </ScrollView>


          </View>
        </View>
      </View>

    );
  }
};


var styles = StyleSheet.create({
  menu: {
    flex: 1,
    padding:5,
  },
  container:{
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor:'#C9E997',
  },
  avatarContainer: {
    marginBottom:15,
    marginTop: 15,
    marginLeft:15,
  },
 statusBar:{
    width: window.width,
    flex: 0.03,
    backgroundColor:'#990000'
  },
  navbarContainer:{
    flex:0.0875,
    justifyContent:'center',
    flexDirection:'row',
  },
  navbarContainerAndroid:{
    flex:0.0975,
    justifyContent:'center',
    flexDirection:'row',
  },
  body:{
    width: window.width,
    flex:0.9,
    marginLeft:5
  },
  avatar: {
    width: 30,
    height: 30,
    flex: 1,
  },
  row:{
    flex:1,
    justifyContent:'center',
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 4,
  },
  profileName:{
    position: 'absolute',
    left: 45,
    top: 10,
    fontSize: 19,
    color:'white'
  },
  profileNameAndroid:{
    position: 'absolute',
    left: 45,
    top: 15,
    fontSize: 19,
    color:'white'
  },
  name: {
    position: 'absolute',
    left: 40,
    fontSize: 20,
    top: 5,
    color:'#EB007D',
    fontSize:18,
    fontWeight: 'bold',
  },
  line:{
    height:5,
  },
   navbar:{
    flex:.1,
  },
  image:{
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    imagelogo: {

      width: 150,
      height: 150,

    }

});
