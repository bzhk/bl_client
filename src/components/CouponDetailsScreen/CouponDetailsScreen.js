import React, {useContext} from 'react';
import {View, Image, Text, TouchableHighlight, Linking} from 'react-native';
import {GlobalContext} from './../../context/GlobalContext';

const CouponDetailsScreen = props => {
  return (
    <Container>
      <Header>
        <Left>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack(null);
            }}>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </TouchableOpacity>
        </Left>

        <Body>
          <Title>Kupon</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <View style={{margin: 10}}>
          <Text>Test</Text>
        </View>
      </Content>

      <PanelBottom navigation={this.props.navigation} />
    </Container>
  );
};
CouponDetailsScreen.contextType = GlobalContext;
export default CouponDetailsScreen;
