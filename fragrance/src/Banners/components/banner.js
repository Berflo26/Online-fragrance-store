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
  Alert,
  FlatList,
} from 'react-native';

import Logged from '../../Login/logged';

const Banner1 = props => {
  const {catalogo} = props;

  console.log('perfumes: ', catalogo.perfumes);

  return (
    <SafeAreaView>
    <ScrollView>
      <Image
        style={{
          width: 500,
          height: 100,
          resizeMode: 'cover',
        }}
        source={{uri: catalogo.url}}
      />
      {catalogo.perfumes && (
        <>
          <Text style={styles.text}>Catalogo de Perfumes</Text>
          <FlatList
            style={{width: '100%', height: '100%'}}
            data={catalogo.perfumes}
            renderItem={({item}) => {
              console.log('Item: ', item);
              return (
                <TouchableOpacity style={{width: '50%'}}>
                  <Image
                    source={{uri: item.url}}
                    style={{width: 100, height: 100}}
                  />
                  <Text style={styles.text1}>{item.nombre}</Text>
                  <Text style={styles.text1}>{item.descripcion}</Text>
                  <Text style={styles.text1}>{item.precio}</Text>
                </TouchableOpacity>
              );
            }}
            numColumns={2}
            horizontal={false}
          />
        </>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: 'pink',
  },
  text1: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 10,
  },
});
export default Banner1;
