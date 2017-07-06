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
  Audio,
} from 'react-native';



var SideMenu = require('react-native-side-menu')
var windowSize = Dimensions.get('window');
var Platform = require('Platform');

import Profiles from './profiles';
import Gallery from './gallery';
import Venue from './venue';



class Dashboard extends React.Component {



  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
       selectedItem:'',
       spinner:false,
       isLoading:true,
       selectedItem:'Dashboard',
       login:false
    };
  }



  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }
  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  };
  render(){
   let android = Platform.OS == 'android'
    var Menu = require('./menu');
    return (

      <SideMenu
        menu={<Menu navigator={this.props.navigator} login={this.props.login} onItemSelected={this.onMenuItemSelected}/>}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)} style={{backgroundColor:'red'}}>
        <View style={styles.container}>

          <View style={styles.navbar}>
          {Platform.OS == 'ios' ?(
            <View style={styles.statusBar}>
            </View>
            ):<View></View>}
            <View style={[styles.navbarContainer, android && styles.navbarContainerAndroid]}>
              <View style={styles.navbarIcon}>
                <TouchableOpacity onPress={() => this.toggle()}>
                  <Image
                   style={styles.menu2}
                   source={require('./img/menu.png')} />
                </TouchableOpacity>
              </View>
              <View style={styles.navbarText}>
                {this.state.selectedItem == 'Dashboard' ? (
                  <Text style={styles.title}>వధువరుల</Text>
                  ):
                  this.state.selectedItem == 'gallery' ? (
                  <Text style={styles.title}>నిర్చ్గితార్థాపు చిత్రలు</Text>
                  ):
                  this.state.selectedItem == 'Future Auctions' ? (
                  <Text style={styles.title}>శుభ ముహుర</Text>
                  ):
                  this.state.selectedItem == 'Closed Auctions' ? (
                  <Text style={styles.title}>వివహ వెధీక</Text>
                  ):
                  this.state.selectedItem == 'Winners' ? (
                  <Text style={styles.title}>Winners</Text>
                  ):
                  <Text style={styles.title}>Buy Packages</Text>}
              </View>
                <View style={styles.navbarButton}>
                </View>
              </View>
            </View>
          <View style={styles.line}></View>
            <View style={styles.subContainer}>
            {this.state.selectedItem == 'Dashboard' ? (
               <Profiles/>
              ):this.state.selectedItem == 'gallery' ? (
              <Gallery/>
              ):this.state.selectedItem == 'time' ? (
              <Venue/>
              ):(
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'black'}}>world</Text>
              </View>
              )
                }
          </View>
        </View>
      </SideMenu>
    );
  }

}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navbar:{
    flex:.1,
    backgroundColor: 'transparent'
  },
  statusBar:{
    width: window.width,
    flex: 0.033,
    backgroundColor:'red'
  },
  navbarContainer:{
    flex:0.0875,
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'red'
  },
  navbarContainerAndroid:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#CFFF84',
  },
  navbarIcon:{
    flex:0.25,
    justifyContent:'center',
    alignSelf:'center'
  },
  navbarButton:{
    flex:.25,
    justifyContent:'center',
    alignSelf:'center'
  },
  title:{
    fontSize: 20,
    textAlign:'center',
  },
  title1:{
    fontSize: 14,
    marginRight:5,
    textAlign:'center',
    color: 'white'
  },
  navbarText:{
    flex:.5,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:'#CFFF84',
  },
  subContainer:{
    flex:.9,
  },
  profileContainer:{
    flex: 1,
    backgroundColor:'#f5f5f5',
  },
  menu2:{
    width:30,
    height:30,
    marginLeft:15
  },
   menu1:{
    width:30,
    height:30,
  },
  button: {
     height: 45,
     width:windowSize.width,
      flexDirection: 'row',
      backgroundColor: '#4d68a1',
      borderColor: '#4d68a1',
      borderWidth: 5,
      borderRadius: 5,
      marginRight:40,
      marginLeft:40,
      justifyContent:'center',
      alignSelf:'center',
  },
  mainContainer:{
    flex:1,
    backgroundColor:'#dcdee0',
    width:windowSize.width,
    height:windowSize.height
  },
  mainHeader:{
    flex:.05,
    width:windowSize.width,
    height:windowSize.height
  },
  subMainContainer:{
    flex:1,
  },
  menu:{
    flex:1,
    width: windowSize.width,
    height: windowSize.height,
  },
  row:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#f0f1f2',
    paddingBottom:5
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
  line:{
    flex:0.0015,
    backgroundColor:'#4d68a1'
  },

  profilePic:{
    width: windowSize.width,
    height: windowSize.height/4,
  },

  headline: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'bold',
     color: 'white'
  },
   subBody:{
    flex: 1

  },

  centersubBody:{
    flex: 0.8,
    alignSelf:'center'
  },
  rightsubBody: {
    flex: 0.2,
    justifyContent:'flex-end',
    alignSelf:'center'
  },
 image:{
  marginLeft:10,
  width:40,
  height:40,
  borderWidth:2,
  borderColor:'#c7c7cd',
  borderRadius:40/2
},
  List:{
    flex:0.8,
  },
  body:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },
    body1:{
    backgroundColor:'#4d68a1',
    justifyContent:'center',
    alignSelf:'center'
  },
  separator: {
    height: 0.8,
    backgroundColor: '#9c9c9c'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
    image:{
    width:100,
    height:100,
    borderRadius:100/2
  },
    button:{
      height: 45,
      flexDirection: 'row',
      backgroundColor: '#4d68a1',
      borderColor: '#4d68a1',
      borderWidth: 5,
      borderRadius: 5,
      marginRight:40,
      marginLeft:40,
      marginTop: 20,
      marginBottom:5,
      justifyContent:'center',
      alignSelf:'stretch',
  },
   buttonText:{
      fontSize: 18,
      textAlign:'center',
      marginTop:5,
      marginBottom:5,
      color:'white',
      textAlignVertical:'center'
  },
  text:{
     marginLeft:20,
     marginTop:18,
     fontSize: 15,
     textAlign: 'left',
     color:'#282828'
  },


});

module.exports = Dashboard;
