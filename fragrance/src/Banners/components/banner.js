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

    const {
        catalogo,
    } = props;

    return(
        <SafeAreaView>
            <Image
                style={{
                    width: 500,
                    height: 100,
                    resizeMode: 'cover',
                }}
                source={{ uri: catalogo.url, }}
            />
        </SafeAreaView>
    );

}

export default Banner1;