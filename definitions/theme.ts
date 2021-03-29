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
    Light: '#E8E8E8',
    Medium: '#CCCCCC',
    Dark: '#767676',
    VeryDark: '#585858',
    SuperDark: '#3B3B3B',
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
  Header: {
    fontSize: 24,
    fontFamily: FontFamily.Medium,
  },
  SuperMin: {
    fontSize: 10,
    fontFamily: FontFamily.Regular,
  },
};
