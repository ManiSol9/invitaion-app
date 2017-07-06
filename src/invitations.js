import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class invitations extends React.Component {
  

  render() {
    return (
              <Image
          style={styles.backgroundImage}
          source={require('./img/back3.jpg')}
        >
<View style={[ styles.container ]} >

<View style={styles.Imagecenter}>
        


<Text style={styles.backgroundImage}>


</Text>


       





</View>


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
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});

module.exports = invitations;