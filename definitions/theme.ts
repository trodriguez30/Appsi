import { Dimensions } from 'react-native';

export const Metrics: any = {
  ScreenWidth: Dimensions.get('window').width,
  ScreenHeight: Dimensions.get('window').height,
  Padding: 16,
  Margin: 16,
  BorderRadius: 8,
};

export const FontFamily: any = {
  Bold: 'oswald-bold',
  Medium: 'oswald-medium',
  Regular: 'oswald-regular',
};

export const Colors: any = {
  Primary: '#8C1D5E',
  Second: '#E6E36A',
  Warning: '#FFC554',
  Success: '#BDE346',
  Error: '#E06454',
  GrayScale: {
    White: '#FFFFFF',
    Divider: '#CCCCCC',
    Light: '#E8E8E8',
    Medium: '#CCCCCC',
    Dark: '#767676',
    VeryDark: '#585858',
    SuperDark: '#3B3B3B',
    BackgroundModal: 'rgba(118, 118, 118, 0.4)',
  },
  Tags: {
    Primary: {
      Background: 'rgba(140, 29, 94, 0.3)',
      Text: '#8C1D5E',
    },
    Second: {
      Background: 'rgba(230, 227, 106, 0.3)',
      Text: '#A19E00',
    },
    Third: {
      Background: 'rgba(118, 118, 118, 0.3)',
      Text: '#585858',
    },
  },
};

export const Shadow: any = {
  shadowColor: Colors.GrayScale.SuperDark,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 5,
};

export const FontStyle: any = {
  Title: {
    fontSize: 24,
    fontFamily: FontFamily.Bold,
  },
  Subtitle: {
    fontSize: 18,
    fontFamily: FontFamily.Medium,
  },
  Normal: {
    fontSize: 14,
    fontFamily: FontFamily.Regular,
  },
  Min: {
    fontSize: 12,
    fontFamily: FontFamily.Regular,
  },
  Big: {
    fontSize: 36,
    fontFamily: FontFamily.Bold,
  },
  Button: {
    fontSize: 18,
    fontFamily: FontFamily.Medium,
  },
  LabelButton: {
    fontSize: 18,
    fontFamily: FontFamily.Regular,
  },
  Header: {
    fontSize: 24,
    fontFamily: FontFamily.Medium,
  },
  SuperMin: {
    fontSize: 10,
    fontFamily: FontFamily.Regular,
  },
};
