import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Confetti from 'react-native-confetti';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () =>

<View style={[ styles.container]} >



<View style={styles.Imagecenter}>

        <Image
          style={styles.stretch}
          source={require('./img/suresh.jpg')}
        />



        <Text style={{ fontFamily: 'AlNile-Bold', backgroundColor: 'rgba(0,0,0,0)'
, fontSize:35, fontWeight:'bold', height: 50, marginTop:30, color: 'white' }}>

         <Text style={{ fontFamily: 'AlNile-Bold', fontSize:16, fontWeight:'bold', top: 20 }}>
         చి..
        </Text>
        సురేష్

        </Text>

       <Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)', fontSize:16, fontWeight:'bold', color: 'white' }}>

       సుపర్డెంట్ అఫ్ పొలిస్,</Text>

       <Text style={{ fontFamily: 'AlNile-Bold', fontSize:16,backgroundColor: 'rgba(0,0,0,0)', fontWeight:'bold', color: 'white' }}>

        ఆంధ్ర ఫ్రదేశ్


        </Text>

        <Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)'
,  fontSize:16, fontWeight:'bold', height: 100, marginTop:30, width:320, color: 'white'}}>

         ( తు. గొ. జిల్లా, సొమర్లకోట మండలం, అఛ్చంపెట గ్రామ వా.లు శ్రి పెదిరిడ్డి పొలారాజు, శ్రిమతి అధిలక్ష్మి దంపతుల కుమారుడు )

        </Text>


</View>

</View>;
const SecondRoute = () =>

<View style={[ styles.container ]} >

<View style={styles.Imagecenter}>

        <Image
          style={styles.stretch}
          source={require('./img/swapna.jpg')}
        />


       <Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)', fontSize:35, fontWeight:'bold', height: 55, marginTop:30, color: 'white' }}>

         <Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)', fontSize:16, fontWeight:'bold', top: 20, color: 'white' }}>
          చి.ల.సౌ.
        </Text>
         స్వప్న

        </Text>


        <Text style={{ fontFamily: 'AlNile-Bold',backgroundColor: 'rgba(0,0,0,0)', fontSize:16, fontWeight:'bold', height: 150, marginTop:30, width:320 , color: 'white'}}>

         ( తు. గొ. జిల్లా, సొమర్లకోట మండలం, అఛ్చంపెట గ్రామ వా.లు శ్రి పెదిరిడ్డి పొలారాజు, శ్రిమతి అధిలక్ష్మి దంపతుల కుమారుడు )

        </Text>


</View>


</View>;


class profiles extends React.Component {

  componentDidMount() {

    if (this._confettiView)
    {
        this._confettiView.startConfetti();

    }

  }




  state = {
    index: 0,
    routes: [
      { key: '1', title: 'వరుడు' },
      { key: '2', title: 'వధువు' },
    ],
  };


   _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar style={styles.tabss} {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  });
  render() {
    return (

        <Image
          style={styles.backgroundImage}
          source={require('./img/appback.jpg')}
        >
        <Confetti ref={(node) => this._confettiView = node}/>

      <TabViewAnimated
        style={styles.tabs}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  stretch: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3
  },
  content: {
    color: 'white',
    lineHeight: 10,
    fontSize: 15,

  },
  tabss: {
    backgroundColor: '#EB007D',
  },
  backgroundImage: {
    flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
  }
});

module.exports = profiles;
