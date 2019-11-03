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
    TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = (props) => {

    const {cambiarPantalla} = props;
    
    return (  

        <View style = {styles.container}>
             <StatusBar backgroundColor="#FBCECB"/>
             <TouchableWithoutFeedback>
                <Icon
                    name = "bars"
                    color = "white"
                    size = {27}
                 />
             </TouchableWithoutFeedback>
             <Image style = {styles.logo} source = {require('../images/logo3.png')}/>
                <Icon
                name = "search"
                color = "white"
                size = {27}
             />

        </View>
        
            

       
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        height:98,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#FBCECB',
        marginHorizontal: 3
        
    },
    logo:{
        width:120,
        height:80,
    },
    
})

export default Home;