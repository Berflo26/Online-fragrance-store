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
import logo from '../images/imglogin4.png';


const {width: WIDTH} = Dimensions.get('window')

const Login = (props) => {

    const {cambiarPantalla} = props;
    
 
    return(
        <ImageBackground  source = {bgImage} style={styles.backgroundContainer}>
           
            <StatusBar backgroundColor="#FBCECB"
            />
           
            
                <View style = {styles.logoContainer}> 
                    <Image source = {logo} style= {styles.logo}/>
                    <Text style = {styles.logoText}>
                        FRAGRANCE SHOP
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    
                    <TextInput 
                    defaultValue={''}
                        style= {styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid= 'transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
            
                <TextInput
                    style= {styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid= 'transparent'
                />             
            </View>

            
                <TouchableOpacity style={styles.btnLogin} 
                onPress={
                    () => {
                       cambiarPantalla('');
                    }
                }
                >
                    <Text style={styles.text}> Login </Text>
                </TouchableOpacity>
                <Text>
                </Text>
                <Text style ={styles.text2}
                onPress={
                    () => {
                       cambiarPantalla('registrar');
                    }
                }
                >
                    ¿Aún no tienes cuenta? Registrate ya...
                    

                </Text>

            </ImageBackground>
    );
    
};

const styles = StyleSheet.create ({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
        
    },
    logo: {
        width: 140,
        height: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    logoText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop:10,
        opacity: 0.5,
        
    },
    inputContainer:{
        marginTop: 10
    },
    input:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 25,
        paddingLeft: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        marginHorizontal: 25,
        color: 'white' ,
        
   },
   btnLogin:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#FBCECB',
    justifyContent: 'center',
    marginTop:20,
    opacity: 0.8
    
   },
   text:{
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
   },
   text2:{
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',

   }
}
)

export default Login;