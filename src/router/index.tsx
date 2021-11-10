import React, { useState } from 'react'
import { StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import CampaignScreen from '../screens/CampaignScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CreateCampaignScreen from '../screens/CreateCampaignScreen';
import UserScreen from '../screens/UserScreen';
import AuthScreen from './AuthScreen';
import MainScreen from './MainScreen'
import { RootStackParamList } from './types';
import TabBar from '../components/tabbar/TabBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function registerScreens(store: any) {

  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(true)
 

  return (
    <SafeAreaProvider >
      <NavigationContainer>
        {/* <StatusBar
        animated={true}
        backgroundColor="#000"
       /> */}
        <Stack.Navigator>
          {!isAuthenticated ?
            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen} />
            : (
              <>
                <Stack.Screen
                  name="MainScreen"
                  component={MainScreen}
                  options={{ headerShown: false }}
                />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}