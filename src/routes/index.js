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
      API_URL: '',
      activeBottomItemName: 'MainMapScreen',
    };
  }

  renderPath = pathName => {
    console.log(pathName);
    NavigationService.navigate(pathName, {});
  };

  setActiveBottomItemName = bottomItemName => {
    this.setState({activeBottomItemName: bottomItemName});
  };

  render() {
    const {activeBottomItemName} = this.state;
    return (
      <GlobalContext.Provider
        value={{
          renderPath: this.renderPath,
          setActiveBottomItemName: this.setActiveBottomItemName,
          activeBottomItemName: activeBottomItemName,
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
