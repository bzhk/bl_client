import React, {useContext} from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {GlobalContext} from './../../context/GlobalContext';

const PanelBottom = ({navigation}) => {
  const context = useContext(GlobalContext);
  return (
    <Footer>
      <FooterTab>
        {context.activeBottomItemName &&
        context.activeBottomItemName === 'MainMapScreen' ? (
          <Button
            vertical
            active
            onPress={() => {
              context.setActiveBottomItemName('MainMapScreen');
              navigation.navigate('MainMapScreen');
            }}>
            <Icon active name="navigate" />
            <Text>Punkty</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => {
              context.setActiveBottomItemName('MainMapScreen');
              navigation.navigate('MainMapScreen');
            }}>
            <Icon name="navigate" />
            <Text>Punkty</Text>
          </Button>
        )}

        {context.activeBottomItemName &&
        context.activeBottomItemName === 'CouponScreen' ? (
          <Button
            vertical
            active
            onPress={() => {
              context.setActiveBottomItemName('CouponScreen');
              navigation.navigate('CouponScreen');
            }}>
            <Icon active name="apps" />
            <Text>Kupony</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => {
              context.setActiveBottomItemName('CouponScreen');
              navigation.navigate('CouponScreen');
            }}>
            <Icon name="apps" />
            <Text>Kupony</Text>
          </Button>
        )}
      </FooterTab>
    </Footer>
  );
};

export default PanelBottom;
