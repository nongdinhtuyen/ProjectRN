// In index.js of a new project
import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { RootStackParamList } from '../router/types';
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import CampaignScreen from './CampaignScreen'
import RegisterScreen from './RegisterScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


type LandingScreenStackParamList = {
  LandingScreen: undefined,
  CampaignScreen: undefined,
  RegisterScreen: undefined,
}

type LandingScreenScreenRouteProp = RouteProp<LandingScreenStackParamList, 'LandingScreen'>
type LandingScreenScreenNavigationProp = NativeStackNavigationProp<LandingScreenStackParamList, 'LandingScreen'>

interface Props {
  navigation: LandingScreenScreenNavigationProp
  route: LandingScreenScreenRouteProp
}

const Stack = createNativeStackNavigator()

const MainHomeScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ededed' }}>
      <ScrollView >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingTop: moderateScale(20),
            paddingBottom: moderateScale(20),
            height: verticalScale(130),
            borderBottomColor: '#757171',
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              width: moderateScale(100),
              height: moderateScale(100),
              borderRadius: 50,
              borderWidth: 4,
              borderColor: '#727272',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: moderateScale(18),
            }}
          >
            <FontAwesome name="user" size={moderateScale(75)} color="#727272" />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              height: '100%',
            }}
          >
            <Text style={{ fontSize: moderateScale(17), fontWeight: '600', color: "#000" }}>Nông Đình Tuyên</Text>
            <Text style={{ fontSize: moderateScale(15) }}>Ngày sinh: 24/03/1999</Text>
            <Text style={{ fontSize: moderateScale(15) }}>Tình trạng: chưa tiêm chủng</Text>
          </View>
        </View>

        <View style={styles.root}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.navigation.navigate('CampaignScreen')}
          >
            <Image style={styles.image} source={require('../assets/syringe.png')}
            />
          </TouchableOpacity>
          {/* <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text>Tiêm chủng</Text>
          <Button
            title='Push Campaign Screen'
            color='#710ce3'
            onPress={() => props.navigation.navigate('CampaignScreen')}
          />
        </View> */}
          {/* <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text>Tạo chiến dịch tiêm chủng</Text>
          <Button
            title='Push Register Screen'
            color='#710ce3'
          />
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text>Đăng ký chiến dịch tiêm chủng</Text>
          <Button
            title='Push Register Screen'
            color='#710ce3'
          />
        </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

const LandingScreen = (props: any) => {

  return (
    <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }} name="MainHomeScreen" component={MainHomeScreen} />
      <Stack.Screen name="CampaignScreen" component={CampaignScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#e0e0e0',
    padding: moderateScale(30),
    paddingBottom: moderateScale(80),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  item: {
    // width: 100,
    // height: 100,
    borderColor: '#8e8787',
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // resizeMode: 'center',
    width: moderateScale(100),
    height: moderateScale(100),
    marginBottom: moderateScale(30),
  },
  image: {
    width: '70%',
    height: '70%',
  }
});

export default MainHomeScreen;