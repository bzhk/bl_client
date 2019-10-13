import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import {View} from 'react-native';
import PanelBottom from './../PanelBottom/PanelBottom';
import {GlobalContext} from './../../context/GlobalContext';
import QRCode from 'react-native-qrcode-svg';

const styles = {};

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Title>Profil</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 15}}>
              Moje Dane
            </Text>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              Nazwa: {this.context.loogedInUserInfo.name}
            </Text>
            <Text style={{fontSize: 16, marginBottom: 10}}>
              Email: {this.context.loogedInUserInfo.email}
            </Text>

            <Text style={{fontSize: 16, marginBottom: 40}}>
              {this.context.loogedInUserInfo.points} punktów
            </Text>

            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
              Mój QR Code:
            </Text>
            <QRCode value={this.context.loogedInUserInfo.email} />
          </View>
        </Content>

        <PanelBottom navigation={this.props.navigation} />
      </Container>
    );
  }
}

ProfileScreen.contextType = GlobalContext;
export default ProfileScreen;
