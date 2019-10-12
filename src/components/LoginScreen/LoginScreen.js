import React, {Component} from 'react';
import {
  Container,
  Form,
  Header,
  Input,
  Content,
  Item,
  Button,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Text,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = {
  loginBtn: {
    backgroundColor: '#5dcb74',
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </TouchableOpacity>
          </Left>

          <Body>
            <Title>Logowanie</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <Form style={styles.formContainer}>
            <Item floatingLabel last>
              <Input placeholder="Username" />
            </Item>
            <Item floatingLabel last>
              <Input placeholder="Password" />
            </Item>
          </Form>

          <Button
            rounded
            center
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('MainMapScreen')}>
            <Text>Logowanie</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
