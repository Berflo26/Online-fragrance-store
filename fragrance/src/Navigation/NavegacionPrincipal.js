import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';

import Login from '../component/Login/login';
import Registrar from '../component/Registro/registrar';
import Menu from '../component/Menu/sidemenu';
import Home from '../component/Homepage/home';
import Banner1 from '../component/Banners/banner1';

const navegacion= createStackNavigator ({
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