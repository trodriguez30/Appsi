import moment from 'moment';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { Colors, FontStyle, Metrics } from '../definitions/theme';
import { ASSISTANTS_TYPE } from '../definitions/constants';

import 'moment/locale/es';
const userIcon =  require('../assets/icons/user.png');
interface AssistantItemProps {
  id: number;
  firstName: string;
  lastName: string;
  servicesArray: Array<object>;
  type: string;
  phone: string;
}

const AssistantItem = (props: AssistantItemProps) => {
  moment.locale('es');
  const styleType = props.type === ASSISTANTS_TYPE[0] ? Colors.Tags.Primary : props.type === ASSISTANTS_TYPE[1] ? Colors.Tags.Second : Colors.Tags.Third;

  return (
    <View style={styles.serviceContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image source={userIcon} style={{ width: 25, height: 25, marginRight: Metrics.Margin / 2,}} resizeMode="contain" />
        <Text
          style={[
            FontStyle.Subtitle,
            {
              color: Colors.GrayScale.DarkGray,
            },
          ]}
        >
          {`${props.firstName} ${props.lastName}`}
        </Text>
      </View>
      <Text
        style={[FontStyle.Normal, { color: Colors.GrayScale.VeryDark, marginVertical: Metrics.Margin / 2 }]}
      >{`Ha asistido a ${props.servicesArray.length} servicios`}</Text>
      <Divider style={styles.divider} />
      <View style={styles.details}>
        <Button
          uppercase={false}
          icon="eye-plus-outline"
          mode="text"
          style={{ marginRight: -Metrics.Padding * 0.75 }}
          labelStyle={FontStyle.Normal}
          onPress={() => console.log('Pressed')}
        >
          Ver detalles
        </Button>
      </View>
      <View style={[styles.tag, { backgroundColor: styleType.Background }]}>
        <Text style={{ ...FontStyle.Min, color: styleType.Text}}>{props.type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceContainer: {
    width: '100%',
    height: 134,
    borderRadius: Metrics.BorderRadius,
    backgroundColor: Colors.GrayScale.White,
    padding: Metrics.Padding,
    marginBottom: Metrics.Margin / 2,
    justifyContent: 'space-between',
    position: 'relative',
  },
  divider: {
    marginVertical: Metrics.Margin / 2,
    backgroundColor: Colors.GrayScale.Divider,
    height: 0.5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: { position: 'absolute', right: Metrics.Padding, top: Metrics.Padding, borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4}
});

export default AssistantItem;
