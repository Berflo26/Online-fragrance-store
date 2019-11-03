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
    Alert
} from 'react-native';

const Banner1 = (props) => {

    const {cambiarPantalla} = props;

    return(
        <SafeAreaView>
        <View>
        <Text>
            hola tabla
        </Text>
        </View>
        </SafeAreaView>
    );

}

export default Banner1;