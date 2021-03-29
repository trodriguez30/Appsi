import React from 'react';

import Routes from './routes/index';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Colors } from './definitions/theme';
import { useFonts } from 'expo-font';
import { FontFamily } from './definitions/theme';

import AppLoading from 'expo-app-loading';

import { fontAssets } from './settings/assets';

export default function App() {
  let [fontsLoaded] = useFonts(fontAssets);

  const theme: any = {
    ...DefaultTheme,
    fonts: {
      regular: {
        fontFamily: FontFamily.Regular,
        fontWeight: 'normal',
      },
      Medium: {
        fontFamily: FontFamily.Medium,
        fontWeight: 'normal',
      },
    },
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.Primary,
      accent: Colors.Second,
    },
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
