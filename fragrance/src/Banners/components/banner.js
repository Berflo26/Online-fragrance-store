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
        <Text>Listado de Perfumes</Text>
        <FlatList
          style={{ width: '100%', height: '100%', }}
          data={catalogo.perfumes}
          renderItem={({ item }) => {
            console.log('Item: ', item);
            return (
              <TouchableOpacity style={{ width: '50%', }}>
                <Image source={{ uri: item.url }} style={{width: 100, height: 100,}} />
                <Text>{item.nombre}</Text>
                <Text>{item.descripcion}</Text>
                <Text>{item.precio}</Text>
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          horizontal={false}
        />
        </>
      )}

      
    </SafeAreaView>
  );
};

export default Banner1;
