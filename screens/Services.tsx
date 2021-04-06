import React from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import Header from '../components/Header';
import ServiceItem from '../components/ServiceItem';
import { Colors, Metrics } from '../definitions/theme';
import moment from 'moment';
import 'moment/locale/es';
import { StatusBar } from 'expo-status-bar';
import { ServicesArray } from '../definitions/hardcode';
const Services = () => {
  moment.locale('es');

  const renderItem = ({ item }: any) => <ServiceItem {...item} />;

  return (
    <View style={{ flex: 1, zIndex: 1 }}>
      <ImageBackground
        source={require('../assets/background-1.png')}
        style={{
          flex: 1,
        }}
      >
        <Header
          rightIcon="dots-vertical"
          rightAction={() => null}
          title="Servicios"
          subtitle={moment().format('MMMM YYYY')}
          color={Colors.GrayScale.White}
        />
        <View style={{ flex: 1, paddingHorizontal: Metrics.Padding }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ServicesArray}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
};

export default Services;
