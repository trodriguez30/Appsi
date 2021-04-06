import moment from 'moment';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { Colors, FontStyle, Metrics } from '../definitions/theme';
import 'moment/locale/es';

interface ServiceItemProps {
  id: number;
  title: string;
  servicesArray: Array<string>;
  max_assistanst: number;
  total_assistants: number;
  created_at: Date;
  description: string;
}

const ServiceItem = (props: ServiceItemProps) => {
  moment.locale('es');
  return (
    <View style={styles.serviceContainer}>
      <View>
        <Text
          style={[
            FontStyle.Subtitle,
            {
              color: Colors.GrayScale.DarkGray,
              marginBottom: Metrics.Margin / 2,
            },
          ]}
        >
          {props.title}
        </Text>
        <Text
          style={[FontStyle.Normal, { color: Colors.GrayScale.Dark }]}
        >{`# de servicios: ${props.servicesArray.length}`}</Text>
      </View>
      <Divider style={styles.divider} />
      <Text
        style={[FontStyle.Min, { color: Colors.GrayScale.VeryDark }]}
      >{`Se han registrado ${props.total_assistants} de ${props.max_assistanst} cupos disponibles`}</Text>
      <View style={styles.details}>
        <Button
          uppercase={false}
          icon="eye-plus-outline"
          mode="text"
          style={{ marginLeft: -Metrics.Padding * 0.75 }}
          onPress={() => console.log('Pressed')}
        >
          Ver detalles
        </Button>
        <Text style={[FontStyle.Normal, { color: Colors.GrayScale.Dark }]}>{props['created_at']}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceContainer: {
    width: '100%',
    height: 150,
    borderRadius: Metrics.BorderRadius,
    backgroundColor: Colors.GrayScale.White,
    padding: Metrics.Padding,
    marginBottom: Metrics.Margin,
    justifyContent: 'space-between',
  },
  divider: {
    marginVertical: Metrics.Margin / 2,
    backgroundColor: Colors.GrayScale.Divider,
    height: 0.5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ServiceItem;
