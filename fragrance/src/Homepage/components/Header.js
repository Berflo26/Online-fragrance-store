import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
  StatusBar,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import {withNavigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Header extends Component{
    render(){
        return (
            <>
              <StatusBar backgroundColor="#FBCECB" />
          
              <TouchableWithoutFeedback>
                <Icon style={styles.icn} name="bars" color="white" size={27} />
              </TouchableWithoutFeedback>
      
              <Image
                style={styles.logo}
                source={require('../../images/logo3.png')}
              />
              <Icon style={styles.icn} name="search" color="white" size={27} />
            </>
        )
        
    }
}

const styles = StyleSheet.create({
  logo: {
    width: 110,
    height: 80,
  },
  icn: {
    marginHorizontal: 10,
  },
});