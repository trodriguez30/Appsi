import React from 'react';
import { Image } from 'react-native';

export default function TabbarIcon(props: any) {
  const marginTop = props.focused ? 5 : 2;
  switch (props.route) {
    case 'services': {
      const tabbarIcon = props.focused
        ? require('../assets/tabbar/services-focused.png')
        : require('../assets/tabbar/services-unfocused.png');
      return (
        <Image
          source={tabbarIcon}
          style={{ width: 25, height: 30, marginTop }}
          resizeMode="contain"
        />
      );
    }
    case 'assistants': {
      const tabbarIcon = props.focused
        ? require('../assets/tabbar/assistants-focused.png')
        : require('../assets/tabbar/assistants-unfocused.png');
      return (
        <Image
          source={tabbarIcon}
          style={{ width: 25, height: 30, marginTop }}
          resizeMode="contain"
        />
      );
    }
    default:
      return (
        <Image
          source={require('../assets/tabbar/assistants-unfocused.png')}
          style={{ width: 25, height: 25 }}
          resizeMode="contain"
        />
      );
  }
}
