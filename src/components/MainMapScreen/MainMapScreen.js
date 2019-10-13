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
import {Image, View} from 'react-native';
import PanelBottom from './../PanelBottom/PanelBottom';
import FilterMap from './utils/FilterMap/FilterMap';
import {GlobalContext} from './../../context/GlobalContext';
import markerImage from './images/marker.png';
import PointModal from './utils/PointModal/PointModal';

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
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

    this.state = {
      showPointModal: false,
      activeshowPointModalId: 0,
      activePointData: [],
    };
  }

  setShowPointModal = async () => {
    await this.setState({showPointModal: !this.state.showPointModal});
  };

  setActiveShowPointModalId = async id => {
    console.log(['setActiveShowPointModalId', id, this.state.showPointModal]);
    const activePointDataFromContext = this.context.points.filter(
      point => point.id === id,
    );

    console.log(['activePointDataFromContext', activePointDataFromContext]);
    this.setState({
      activeshowPointModalId: id,
      activePointData: activePointDataFromContext,
    });

    await this.setShowPointModal();
  };

  render() {
    console.disableYellowBox = true;

    return (
      <Container style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 52.22977,
            longitude: 21.01178,
            latitudeDelta: 0.1522,
            longitudeDelta: 0.08021,
          }}
          zoomEnabled={true}
          onRegionChangeComplete={async e => {
            console.log([e.latitude, e.longitude]);
            this.context.setCoords(e.latitude, e.longitude);
            this.context.loadPointByActiveTags();
          }}>
          {this.context &&
            this.context.points &&
            this.context.points.length > 0 &&
            this.context.points.map((point, i) => {
              return (
                <Marker
                  key={`marker-${i}`}
                  coordinate={{latitude: point.lat, longitude: point.lang}}
                  onPress={() => this.setActiveShowPointModalId(point.id)}>
                  <Image source={markerImage} />
                </Marker>
              );
            })}
        </MapView>

        {this.state.showPointModal && this.state.activePointData && (
          <PointModal
            point={this.state.activePointData}
            setShowPointModal={this.setShowPointModal}
          />
        )}

        <FilterMap />

        <PanelBottom navigation={this.props.navigation} />
      </Container>
    );
  }
}
MainMapScreen.contextType = GlobalContext;
export default MainMapScreen;
