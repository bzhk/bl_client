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
import CouponDetails from './CouponDetails/CouponDetails';

const styles = {};

class CouponScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      couponList: [],
      showCouponDetails: false,
      activeCouponDetailsData: [],
    };
  }

  setShowCouponDetails = () => {
    this.setState({showCouponDetails: !this.state.showCouponDetails});
  };

  setCouponDetailsData = id => {
    console.log([
      'this.context.loogedInUserInfo.token',
      this.context.loogedInUserInfo.token,
      this.context.API_URL,
      id,
    ]);
    let API_URL = this.context.API_URL;

    axios
      .get(API_URL + `/api/coupons/${id}`, {
        headers: {
          Authorization: this.context.token,
          AuthUser: this.context.loogedInUserInfo.token,
        },
      })
      .then(async response => {
        if (response.data) {
          console.log(['setCouponDetailsData', response]);

          this.setState({activeCouponDetailsData: response.data});

          this.setShowCouponDetails();
        }
      })
      .catch(async error => {
        console.log(error);
      });
  };

  loadCouponList = () => {
    axios
      .get(this.context.API_URL + '/api/coupons/list', {
        headers: {Authorization: this.context.token},
      })
      .then(async response => {
        if (response.data) {
          console.log(['loadCouponList', response.data]);

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
    const {
      couponList,
      pageTitle,
      showCouponDetails,
      activeCouponDetailsData,
    } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            {showCouponDetails && (
              <Button transparent onPress={() => this.setShowCouponDetails()}>
                <Icon name="arrow-back" />
              </Button>
            )}
          </Left>

          <Body>
            <Title>Kupony</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{margin: 10}}>
            {couponList &&
              !showCouponDetails &&
              couponList.length > 0 &&
              couponList.map((coupon, i) => {
                return (
                  <CouponListItem
                    key={`coupon-${i}`}
                    coupon={coupon}
                    setCouponDetailsData={this.setCouponDetailsData}
                  />
                );
              })}

            {showCouponDetails && (
              <CouponDetails
                coupon={activeCouponDetailsData}
                API_URL={this.context.API_URL}
              />
            )}
          </View>
        </Content>

        <PanelBottom navigation={this.props.navigation} />
      </Container>
    );
  }
}

CouponScreen.contextType = GlobalContext;
export default CouponScreen;
