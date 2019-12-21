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
} from 'react-native';

import bgImage from '../images/imglogin6.png';
import logo from '../images/imglogin4.png';
const {width: WIDTH} = Dimensions.get('window');
import firebase from 'react-native-firebase';
import Home from './../Homepage/containers/home-page-container';
import {Alert} from 'react-native';

export default class Logged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      response: '',
      estado: '',
    };
  }
  render() {
    const {email, password, estado} = this.state;

    return (
      <>
        {estado !== 'logueado' ? (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <StatusBar backgroundColor="#FBCECB" />

            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.logoText}>FRAGRANCE</Text>
              <Text style={styles.logoText2}>¡Perfumando Nicaragua!</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                defaultValue={email}
                style={styles.input}
                placeholder={'Username'}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid="transparent"
                onChangeText={email => this.setState({email})}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={true}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid="transparent"
                defaultValue={password}
                onChangeText={password => this.setState({password})}
              />
            </View>

            <TouchableOpacity style={styles.btnLogin} onPress={this.signin}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <Text
              style={styles.text2}
              onPress={() => {
                props.navigation.navigate('Registrar');
              }}>
              ¿Aún no tienes cuenta, Resgistrate ya...?
            </Text>
          </ImageBackground>
        ) : (
          <Home />
        )}
      </>
    );
  }

  componentDidMount() {
    this.handleAuthStateChanged();
  }

  handleAuthStateChanged = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('Usuario: ', user);
      if (user) {
        this.setState({
          estado: 'logueado',
        });
      } else {
        this.setState({
          estado: '',
        });
      }
    });
  };

  signin = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          email: '',
          password: '',
        });
      })
      .catch(error => {
        Alert.alert('Error perroooooooooo!', error.message);
        this.setState({
          error: error,
        });
      });
  };
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 140,
    height: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 0.5,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 48,
    borderRadius: 25,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    marginHorizontal: 25,
    color: 'white',
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#FBCECB',
    justifyContent: 'center',
    marginTop: 20,
    opacity: 0.8,
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  text2: {
    color: '#575756',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logoText2: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    opacity: 0.5,
  },
});
