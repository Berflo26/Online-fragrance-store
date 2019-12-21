import React, {Component} from 'react';
import Banner from './../components/banner';
import firebase from 'react-native-firebase';
import {Text, StyleSheet} from 'react-native';
import ProgressBA from '../components/progressBA';

class BannerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catalogo: null,
    };
  }

  render() {
    const {catalogo} = this.state;

    return (
      <>
        {catalogo !== null ? (
          <Banner catalogo={catalogo} />
        ) : (
          <Text style={styles.deText}>Cargando Perfumería</Text>
        )}
        <ProgressBA />
      </>
    );
  }

  componentDidMount() {
    const catalogoId = this.props.navigation.getParam('catalogoId');

    const db = firebase.firestore();

    const catalogoSnapshot = db
      .collection('catalogos')
      .doc(catalogoId)
      .get();

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

const styles = StyleSheet.create({
  deText: {
    textAlign: 'center',
    alignItems: 'flex-end',
  },
});
export default BannerContainer;
