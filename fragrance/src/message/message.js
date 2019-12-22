import React, {Component} from 'react';
import {Text, View, Image, Dimensions, StyleSheet } from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

const Slider = props => (
  <View style = {styles.container}>
    <Image style = {styles.image} source={this.props.item} />
  </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      },
      image: {
        flex: 1,
        width: 140      
      },
}) 
   
  

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesSlider: [
        require('../../images/banner2.jpg'),
        require('../../images/banner3.png'),
        require('../../images/banner5.png')
      ]
    }
  }

  render() {
    return (
      <View>
        <Swiper 
            autoplay 
            height={240}
        >
         {
             this.setState.imagesSlider.map((item, i) => <Slider
                uri={item}
                key={i}
             />)
         }
        </Swiper>
      </View>
    );
  }
}


