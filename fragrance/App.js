import React, {Component} from 'react';

import {
    View,
    Text,
    ImageBackground
} from 'react-native';

import Login from './src/component/login';
import Registrar from './src/component/registrar';
import Home from './src/component/home';
import Banner1 from './src/component/banner1';


export default class App extends Component {

  constructor (props){
    super(props);

     this.state = {
        vista: 'Login',
        value:''
    };
  }

  cambiarPantalla = (pantalla) => {

        this.setState({
            vista: pantalla,
        })
    }

  render(){
    const { vista,value } = this.state;

    if(vista === 'Login') {
      const {value} = this.state;
      return (
          <Login
              cambiarPantalla={this.cambiarPantalla}
          />
      );
     }

     if(vista === 'home') {
        return (
          <Home
              cambiarPantalla={this.cambiarPantalla}
          />
        );
      }

     if(vista === 'registrar') {
      return (
          <Registrar
              cambiarPantalla={this.cambiarPantalla}
          />
      );     
     }

     if(vista === 'banner1') {
       return (
          <Banner1
             cambiarPantalla = {this.cambiarPantalla}
          />
       );
     }
  }
};
