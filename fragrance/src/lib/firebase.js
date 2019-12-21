import * as firebase from 'firebase';
import { NativeModules } from 'react-native';

class Firebase {
    static init (){
    firebase.initializeApp({

    apiKey: "AIzaSyAym3WqLmJS8vBgC89MqeMaqn-buztsgLw",
    authDomain: "fragancias-edf16.firebaseapp.com",
    databaseURL: "https://fragancias-edf16.firebaseio.com",
    storageBucket: "fragancias-edf16.appspot.com",

    })
}
}

module.exports = Firebase