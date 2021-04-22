import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import LoginScreen from '../screens/Login';
import ServicesScreen from '../screens/Services';
import OptionsModalScreen from '../screens/OptionsModal';
import AssistansScreen from '../screens/Assistants';
import { Colors } from '../definitions/theme';
import TabbarIcon from '../components/TabbarIcon';
import ModalOptions from './ModalOptions';
const Stack = createStackNavigator();

function ServicesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="ServiceDetails" component={ServicesScreen} />
      <Stack.Screen name="OptionsModal" component={OptionsModalScreen} />
    </Stack.Navigator>
  );
}

function AssistantsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Assistants" component={AssistansScreen} />
      <Stack.Screen name="AssistantDetails" component={AssistansScreen} />
      <Stack.Screen name="OptionsModal" component={OptionsModalScreen} />
    </Stack.Navigator>
  );
}

const CreateComponent = () => {
  return null;
};

const AppStack = () => (
  <NavigationContainer>
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: Colors.GrayScale.White,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 50,
        justifyContent: 'center',
        zIndex: 100,
        position: 'relative',
      }}
    >
      <Tab.Screen
        name="Services"
        component={ServicesStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => <TabbarIcon {...props} route="services" />,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateComponent}
        options={{
          tabBarButton: () => <ModalOptions />,
        }}
      />
      <Tab.Screen
        name="Assistants"
        component={AssistantsStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => <TabbarIcon {...props} route="assistants" />,
        }}
      />
    </Tab.Navigator>
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
