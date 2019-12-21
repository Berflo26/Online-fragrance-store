import React, {Component} from 'react';
import {StyleSheet, Text, View, Navigator, Route, Switch} from 'react-native';

import * as firebase from 'firebase';
import Login from '../login';
import Home from '../../Homepage/components/home';

export default class logincontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialView: null,
      userLoaded: false,
    };
  }

  getInitialView() {
    firebase.auth().OnAuthStateChanged(user => {
      let initialView = user ? 'Home' : 'Login';

      this.setState({
        userLoaded: true,
        initialView,
      });
    });
  }
  renderScene(route, navigator) {
    var globalProps = {navigator};
    switch (route.id) {
      case 'Home':
        return <Home navigator={navigator} />;
      case 'Login':
        return <Login navigator={navigator} />;
    }
    this.getInitialView()
    this.getInitialView = this.getInitialView.bind(this)
  }

  configureScene(route){
      if(route.sceneConfig){
          return route.sceneConfig
      } else {
          return ({
              ...Navigator.sceneConfigs.HorizontalSwipeJumpFromRight,
              gestures: {}
          });
      }

  }

  render() {
    if (this.state.userLoaded) {
      return (
        <Navigator
          initialRoute={{
            id: this.state.initialView,
          }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      );
    } else {
      return null;
    }
  }
}
