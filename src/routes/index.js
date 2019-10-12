import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Welcome from './../components/HomeScreen/HomeScreen';
import LoginScreen from './../components/LoginScreen/LoginScreen';
import MainMapScreen from './../components/MainMapScreen/MainMapScreen';
import CouponScreen from './../components/CouponScreen/CouponScreen';
import {fadeIn} from 'react-navigation-transitions';
import {GlobalContext} from './../context/GlobalContext';
import {Container} from 'native-base';
import NavigationService from './NavigationService';
import axios from 'axios';

const MainStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    MainMapScreen: {
      screen: MainMapScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    CouponScreen: {
      screen: CouponScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    transitionConfig: () => fadeIn(),
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(MainStack);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API_URL: 'http://bzhk09.usermd.net',
      activeBottomItemName: 'MainMapScreen',
      mapTagList: [],
      showMapTags: false,
    };
  }

  renderPath = pathName => {
    NavigationService.navigate(pathName, {});
  };

  setActiveBottomItemName = bottomItemName => {
    this.setState({activeBottomItemName: bottomItemName});
  };

  componentDidMount = () => {
    this.loadMapTagList();
  };

  loadMapTagList = () => {
    let API_URL = this.state.API_URL;

    axios
      .get(API_URL + '/api/tags/list', {
        headers: {Authorization: `hdOHFD743d^f#gdfasf$`},
      })
      .then(async response => {
        if (response.data) {
          const tagListResponse = response.data;

          const tagListResponseArr = tagListResponse.map((tag, i) => {
            tag.active = true;
            return tag;
          });

          this.setState({mapTagList: tagListResponseArr});
        }
      })
      .catch(async error => {
        console.log(error);
      });
  };

  setTagStatus = id => {
    const mapTagList = this.state.mapTagList;

    mapTagList.map((tag, i) => {
      if (tag.id === id) {
        tag.active = !tag.active;
      }
    });

    this.setState({mapTagList: mapTagList});
  };

  setShowMapTags = () => {
    this.setState({showMapTags: !this.state.showMapTags});
  };

  render() {
    const {activeBottomItemName, mapTagList, showMapTags} = this.state;
    return (
      <GlobalContext.Provider
        value={{
          renderPath: this.renderPath,
          setActiveBottomItemName: this.setActiveBottomItemName,
          activeBottomItemName: activeBottomItemName,
          mapTagList: mapTagList,
          showMapTags: showMapTags,
          setShowMapTags: this.setShowMapTags,
          setTagStatus: this.setTagStatus,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <Container>
            <AppContainer />
          </Container>
        </SafeAreaView>
      </GlobalContext.Provider>
    );
  }
}
