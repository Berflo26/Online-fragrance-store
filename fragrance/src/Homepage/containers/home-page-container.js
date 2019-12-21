import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import Home from '../components/home';

class HomePageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: [],
        };
    }

    render() {

        const {
            datos,
        } = this.state;

        console.log(datos);

        return (
            <Home
                listadoDeCatalogos={datos}
            />
        );

    }

    componentDidMount() {
        const db = firebase.firestore();
        const catalogoSnapshots = db.collection('catalogos');
        catalogoSnapshots.onSnapshot((snapshot) => {
            const arregloCatalogo = [];
            snapshot.forEach(documento => {
                arregloCatalogo.push({
                    id: documento.id,
                    ...documento.data(),
                });
            });
            this.setState({
                datos: arregloCatalogo,
            });
        });
    }

}

export default HomePageContainer;