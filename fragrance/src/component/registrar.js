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

const Registrar = (props) => {
 
    const {cambiarPantalla} = props;

    return(
    <ImageBackground>
    <StatusBar backgroundColor="#AF6526"
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
    viw:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    
})


export default Registrar;