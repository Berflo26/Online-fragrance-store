import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';

import Login from '../Login/login';
import Registrar from '../Registro/registrar';
import Home from '../Homepage/home';
import Banner1 from '../Banners/banner1';

const navegacion = createStackNavigator ({
    Login: {
        screen: Login, navigationOptions:{header:null}
    },
    Registrar: {
        screen: Registrar, navigationOptions:{header:null}
    },
    home: {
        screen: Home, navigationOptions:{header:null}
    },
    banner1: {
        screen: Banner1, navigationOptions:{header:null}
    } 
})
export default createAppContainer (navegacion);