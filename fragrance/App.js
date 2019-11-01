import React, {Component} from 'react';

import {
    View,
    Text,
    ImageBackground
    

} from 'react-native';

import Login from './src/component/login';


export default class App extends Component {

  constructor (props){
    super(props);

     this.state = {
        vista: 'Login',
        value:''
    };

    cambiarPantalla = (pantalla) => {

      this.setState({
          vista: pantalla,
      });
  };
  
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
     if(vista === 'sigin') {
      return (
          <Sigin
              cambiarPantalla={this.cambiarPantalla}
              nombre = {this.guardarInput}
          />
      );
  }

  }
};
