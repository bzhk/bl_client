import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Header,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import {View, TouchableOpacity} from 'react-native';
import PanelBottom from './../PanelBottom/PanelBottom';
import axios from 'axios';
import {GlobalContext} from './../../context/GlobalContext';
import CouponListItem from './CouponListItem/CouponListItem';

const styles = {};

class CouponScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      couponList: [],
    };
  }

  loadCouponList = () => {
    axios
      .get(this.context.API_URL + '/api/coupons/list', {
        headers: {Authorization: this.context.token},
      })
      .then(async response => {
        if (response.data) {
          /*const tagListResponse = response.data;

          const tagListResponseArr = tagListResponse.map((tag, i) => {
            tag.active = true;
            return tag;
          });

          this.setState({mapTagList: tagListResponseArr});*/

          console.log(['response.data', response.data]);

          this.setState({couponList: response.data});
        }
      })
      .catch(async error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.loadCouponList();
  };

  setPageTitle = title => {
    this.setState({pageTitle: title});
  };

  render() {
    const {couponList, pageTitle} = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MainMapScreen');
              }}>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </TouchableOpacity>
          </Left>

          <Body>
            <Title>Kupony</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{margin: 10}}>
            {couponList &&
              couponList.length > 0 &&
              couponList.map((coupon, i) => {
                return <CouponListItem key={`coupon-${i}`} coupon={coupon} />;
              })}
          </View>
        </Content>

        <PanelBottom navigation={this.props.navigation} />
      </Container>
    );
  }
}

CouponScreen.contextType = GlobalContext;
export default CouponScreen;
