import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import {View} from 'react-native';
import PanelBottom from './../PanelBottom/PanelBottom';

const styles = {};

export default class CouponScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Text>Eco Waw</Text>
        <PanelBottom navigation={this.props.navigation} />
      </Container>
    );
  }
}
