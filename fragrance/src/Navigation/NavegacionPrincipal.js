import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';

import Login from '../Login/login';
import Registrar from '../Registro/registrar';
import Home from '../Homepage/containers/home-page-container';
import Banner from '../Banners/containers/banner-container';

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
    banner: {
        screen: Banner, navigationOptions:{header:null}
    } 
})
export default createAppContainer (navegacion);