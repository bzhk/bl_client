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
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';
import PanelBottom from './../PanelBottom/PanelBottom';
import FilterMap from './utils/FilterMap/FilterMap';
import {GlobalContext} from './../../context/GlobalContext';

const mapStyle = [
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

const styles = {
  container: {
    /*position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,*/
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

class MainMapScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 52.22977,
            longitude: 21.01178,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.context &&
            this.context.points &&
            this.context.points.length > 0 &&
            this.context.points.map((point, i) => {
              return (
                <Marker
                  coordinate={{latitude: point.lat, longitude: point.lang}}
                />
              );
            })}
        </MapView>
        <FilterMap />
        <PanelBottom navigation={this.props.navigation} />
      </Container>
    );
  }
}
MainMapScreen.contextType = GlobalContext;
export default MainMapScreen;
