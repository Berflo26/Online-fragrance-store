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

const Registrar = (props) => {
 
    const {cambiarPantalla} = props;

    return(
    <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
        <StatusBar backgroundColor="#FBCECB"
        />
        <View>
            <Text>
                Hello
            </Text>
        </View>
    </ImageBackground>
    
    );
}; 

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})

export default Registrar;