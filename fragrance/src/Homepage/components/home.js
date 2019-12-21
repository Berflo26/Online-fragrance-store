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
import Header from './Header.js';

const Home = props => {
  const {listadoDeCatalogos} = props;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
        </View>
        <View>
          {listadoDeCatalogos &&
            listadoDeCatalogos.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    props.navigation.navigate('banner', {catalogoId: item.id});
                  }}>
                  <Image
                    style={styles.containergal}
                    source={{
                      uri: item.url,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 105,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FBCECB',
    marginHorizontal: 3,
  },
  logo: {
    width: 110,
    height: 80,
  },
  containergal: {
    flexDirection: 'row',
    height: 130,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icn: {
    marginHorizontal: 10,
  },
});

export default withNavigation(Home);
