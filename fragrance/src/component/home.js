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
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = (props) => {

    const {cambiarPantalla} = props;
    
    return (  

        <SafeAreaView>
        
        <ScrollView>
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

         <View>
            <Image style = {styles.containergal} source = {{uri:'http://www.fraiche.com.mx/tres-d/images/AndreaToscanoICE_nuevo.jpg'}}/>
            <Image style = {styles.containergal} source = {{uri:'http://www.fraiche.com.mx/tres-d/images/20190328_banner_2_ilumina.jpg'}}/>
            <Image style = {styles.containergal} source = {{uri:'http://www.fraiche.com.mx/tres-d/images/banner4You.jpg'}}/>
            <Image style = {styles.containergal} source = {{uri:'http://www.fraiche.com.mx/tres-d/images/20190328_banner_5_torso_woman.jpg'}}/>
            <Image style = {styles.containergal} source = {{uri:'http://www.fraiche.com.mx/tres-d/images/JonathanMas01.jpg'}}/>
            <Image style = {styles.containergal} source = {{uri:'http://www.fraiche.com.mx/tres-d/images/BannerTS4FRAI.png'}}/>
            <Image style = {styles.containergal} source = {{uri:'http://www.fraiche.com.mx/tres-d/images/BannerMMFRAI.png'}}/>            
         </View> 
        </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        height:105,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#FBCECB',
        marginHorizontal: 3
        
    },
    logo:{
        width:110,
        height:80,
    },
    containergal:{
        flexDirection:"row",
        height: 130,
        marginTop:2,
        alignItems:"center",
        justifyContent:"space-between",
        alignItems:"center"
         
    }
    
})

export default Home;