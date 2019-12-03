import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Lista from '../components/lista.js';



import BusquedaContainer from './../busqueda/busqueda-container';

class Listacontainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            datos: [],
            pantalla: 'perfil',
        };
        
    }

    miEventoPressPantallaCrear = () => {
        this.props.navigation.navigate('crear');
    }

    miEventoPressPantallaEditar = (photo) => {

        this.props.navigation.navigate('editar', {
            photoParaActualizar: photo,
        });
    }

    cambiarPantalla = (pantallaNueva) => {
        this.setState({
            pantalla: pantallaNueva,
        });
    };

    render() {
        const {
            datos,
            pantalla,
        } = this.state

        if(pantalla === 'perfil') {
            return (
                <MiCuenta
                    publicaciones={ datos }
                    cambiarPantalla={this.cambiarPantalla}
                    miEventoPressPantallaCrear={ this.miEventoPressPantallaCrear }
                    miEventoPressPantallaEditar={ this.miEventoPressPantallaEditar }
                />
            );
        }

        if(pantalla === 'busqueda') {
            return (
                <BusquedaContainer
                    publicaciones={ publicaciones }
                    cambiarPantalla={this.cambiarPantalla}
                    miEventoPressPantallaEditar={ this.miEventoPressPantallaEditar }
                />
            );
        }
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('photos').onSnapshot((instantanea) => {
            const { datos } = this.state;
            instantanea.docChanges.forEach((cambio) => {
                const indice = datos.findIndex(item => item.key === cambio.doc.id);
                switch (cambio.type) {
                    case 'added':
                    case 'modified': {
                        if(indice !== -1) {
                            datos[indice].title = cambio.doc.data().title;
                            datos[indice].url = cambio.doc.data().url;
                        }
                        else {
                            datos.push({
                                key: cambio.doc.id,
                                title: cambio.doc.data().title,
                                url: cambio.doc.data().url,
                            });
                        }
                        break;
                    }
                    case 'removed': {
                        if(indice !== -1 ) {
                            datos.splice(indice, 1);
                        }
                        break;
                    }
                }
            });
            this.setState({
                datos: datos,
            });
        });
    }

}

export default Listacontainer;