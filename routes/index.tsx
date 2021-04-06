import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Portal } from 'react-native-paper';
const Tab = createMaterialBottomTabNavigator();

import LoginScreen from '../screens/Login';
import ServicesScreen from '../screens/Services';
import { Colors } from '../definitions/theme';
import TabbarIcon from '../components/TabbarIcon';
import FabIcon from '../components/FabIcon';

const Stack = createStackNavigator();

const SpaceComponent = () =>{ return <></>};

const AppStack = () => (
  <NavigationContainer>
    <Tab.Navigator
      barStyle={{
        backgroundColor: Colors.GrayScale.White,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 50,
        justifyContent: 'center',
        zIndex: 100,
      }}
    >
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => <TabbarIcon {...props} route="services" />,
        }}
      />
      <Tab.Screen
        name="null"
        component={SpaceComponent}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Assistants"
        component={ServicesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => <TabbarIcon {...props} route="assistants" />,
        }}
      />
    </Tab.Navigator>
    <Portal>
      <FabIcon />
    </Portal>
  </NavigationContainer>
);

const AuthStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default function Routes() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return isSignedIn ? <AppStack /> : <AuthStack />;
}
