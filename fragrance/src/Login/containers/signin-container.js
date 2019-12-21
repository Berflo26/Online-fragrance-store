import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Logged from './../logged';
import Home from './../../Homepage/containers/home-page-container';

class SigninContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: '',
            pass: '',
            estado: '',
        };

        this.handleAuthStateChanged();

    }

    render() {
        const {
            usuario,
            pass,
            estado
        } = this.state;
        return (
            <>
                {estado !== 'logueado' ?
                    <Logged
                        eventoCambiarUsuario={(usuario) => this.setState({ usuario: usuario, })}
                        usuario={usuario}
                        eventoCambiarPass={(pass) => this.setState({ pass: pass, })}
                        pass={pass}
                        onClickIniciarSesion={this.signin}
                    />
                    :
                    <Home />
                }
            </>
        );
    }

    handleAuthStateChanged = () => {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                estado: 'logueado',
            });
        });
    };

    signin = () => {
        const { usuario, pass } = this.state;
        firebase.auth().signInWithEmailAndPassword(usuario, pass)
        .then(() => {
            this.setState({
                usuario: '',
                pass: '',
            })
        })
        .catch(error => {
            this.setState({
                error: error,
            });
        });
    };
}

export default SigninContainer;