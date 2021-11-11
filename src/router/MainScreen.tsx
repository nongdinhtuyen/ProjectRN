import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

//screen
import HomeScreen from '../screens/HomeScreen';
import CampaignScreen from '../screens/CampaignScreen';
import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CreateCampaignScreen from '../screens/CreateCampaignScreen';
import UserScreen from '../screens/UserScreen'
import TabBarComponent from '../components/TabBarComponent';


const Stack = createNativeStackNavigator();

export default function MainScreen(store: any) {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabBarComponent"
        component={TabBarComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CampaignScreen"
        component={CampaignScreen}
        options={{
          title: 'Tiêm chủng'
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Đăng ký tiêm chủng'
        }}
      />
    </Stack.Navigator>
  )
}