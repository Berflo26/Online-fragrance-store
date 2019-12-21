import React, { Component } from 'react';
import Banner from './../components/banner';
import firebase from 'react-native-firebase';
import { Text } from 'react-native';

class BannerContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catalogo: null,
        };
    }

    render() {

        const { catalogo } = this.state;

        return (
            <>
                {catalogo !== null ?
                    <Banner
                        catalogo={catalogo}
                    />
                    :
                    <Text>Descargando los datos</Text>
                }
            </>
        );

    }

    componentDidMount() {

        const catalogoId = this.props.navigation.getParam('catalogoId');

        const db = firebase.firestore();

        const catalogoSnapshot = db.collection('catalogos').doc(catalogoId).get();

        catalogoSnapshot
        .then(documento => {
            const catalogo = {
                id: documento.id,
                ...documento.data(),
            };
            this.setState({
                catalogo: catalogo,
            });
        })
        .catch(error => {
            console.log('Errorazo....', error);
            this.setState({
                error: error,
            });
        });

    }

}

export default BannerContainer;