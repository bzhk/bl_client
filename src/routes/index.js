import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Welcome from './../components/HomeScreen/HomeScreen';
import {fadeIn} from 'react-navigation-transitions';
import {GlobalContext} from './../context/GlobalContext';
import {Container} from 'native-base';

const MainStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
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
    };
  }
  render() {
    return (
      <GlobalContext.Provider value={{}}>
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
