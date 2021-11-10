import React, {useLayoutEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarAdvancedButton from './TabBarAdvancedButton';
import { IS_IPHONE_X } from './utils';
import LandingScreen from '../../screens/LandingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const BottomBar = createBottomTabNavigator();

type Props = {
  barColor: string;
};



const TabBar = (props: any, { barColor = '#fff' }: Props) => {
  return (
    <BottomBar.Navigator
      tabBar={(props) => (
        <SafeAreaView>
          <View style={styles.navigatorContainer}>
            <BottomTabBar
              {...props}
            />
            {IS_IPHONE_X && (
              <View style={[styles.xFillLine, {
                backgroundColor: barColor
              }]} />
            )}
          </View>
        </SafeAreaView>
      )}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.navigator,
        tabBarItemStyle: {
          backgroundColor: barColor,
        }
      }}
    >
      <BottomBar.Screen
        name="Home"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={23} color={color} />
          )
        }}
      />
      <BottomBar.Screen
        name="Profile"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={23} color={color} />
          )
        }}
      />
      <BottomBar.Screen
        name="Rocket"
        component={LandingScreen}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton
              bgColor={barColor}
              {...props}
            />
          )
        }}
      />
      <BottomBar.Screen
        name="Messages"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={23} color={color} />
          )
        }}
      />
      <BottomBar.Screen
        name="Settings"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={23} color={color} />
          )
        }}
      />
    </BottomBar.Navigator>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(34)
  }
});

export default TabBar