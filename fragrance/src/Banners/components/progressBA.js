import React, {Component} from 'react';
import {ProgressBarAndroid, StyleSheet, View, ActivityIndicator} from 'react-native';

export default class ProgressBA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size= "large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
   alignItems: "center"
  },
});