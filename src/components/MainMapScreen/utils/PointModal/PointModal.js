import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import closeImg from './images/close.png';
import {TouchableHighlight} from 'react-native-gesture-handler';

const PointModal = props => {
  useEffect(() => {
    console.log(['PointModal', props]);
  }, [props]);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        /*justifyContent: 'center',
        alignItems: 'center',*/
        width: '80%',
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        height: 220,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#2f313f',
        borderRadius: 10,
      }}>
      <View style={{position: 'absolute', top: -10, right: -10}}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => props.setShowPointModal()}>
          <Image
            source={closeImg}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableHighlight>
      </View>
      <View style={{margin: 15}}>
        <Text style={{fontSize: 18, marginBottom: 7}}>
          {props.point[0].name}
        </Text>
        <Text style={{fontSize: 14, marginBottom: 7}}>
          {props.point[0].desc}
        </Text>

        <Text style={{fontSize: 14}}>{props.point[0].address}</Text>
        <Text style={{fontSize: 14, marginBottom: 25}}>
          Tel: {props.point[0].phone}
        </Text>

        {props.point[0].tags_list && props.point[0].tags_list.length > 0 && (
          <Text style={{textAlign: 'center', marginBottom: 5}}>
            Możesz oddać:
          </Text>
        )}
        {props.point[0].tags_list.map((tag, i) => {
          return (
            <Text
              style={{
                borderWidth: 2,
                borderColor: '#5dcb74',
                borderRadius: 15,
                padding: 5,
                textAlign: 'center',
                width: '100%',
              }}>
              {tag.item.name}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default PointModal;
