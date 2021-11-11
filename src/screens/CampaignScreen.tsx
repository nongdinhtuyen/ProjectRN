import React from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { RouteProp } from '@react-navigation/native'
import ButtonComponent from '../components/ButtonComponent'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import customStyles from '../styles'

const shadow = customStyles.shadow

type CampaignScreenStackParamList = {
  LandingScreen: undefined,
  CampaignScreen: undefined,
  RegisterScreen: undefined,
}

type CampaignScreenRouteProp = RouteProp<CampaignScreenStackParamList, 'LandingScreen'>
type CampaignScreenScreenNavigationProp = NativeStackNavigationProp<CampaignScreenStackParamList, 'LandingScreen'>

interface Props {
  navigation: CampaignScreenScreenNavigationProp
  route: CampaignScreenRouteProp
}


function CampaignScreen(props: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={{
          fontSize: moderateScale(20),
          fontWeight: 'bold',
          marginBottom: moderateVerticalScale(10),
        }}>Tổng quan</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: moderateVerticalScale(20),
        }}>
          <View style={[styles.box, {
            borderLeftWidth: 1,
            borderLeftColor: '#29292921'
          }]}>
            <Text style={styles.text1}>8</Text>
            <Text style={styles.text2}>Tổng số</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text1}>4</Text>
            <Text style={styles.text2}>Hoạt động</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text1}>4</Text>
            <Text style={styles.text2}>Ngừng Hoạt động</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text1}>4</Text>
            <Text style={styles.text2}>Gần bạn</Text>
          </View>
        </View>
        <ButtonComponent
          // textStyle={{ backgroundColor: '#5E82CC' }}
          children="Đăng ký tiêm chủng"
          onPress={() => props.navigation.navigate('RegisterScreen')}
        />
        <View style={{ marginTop: 20 }} />
        <ButtonComponent
          children="Danh sách chiến dịch tiêm chủng"
        />
      </View>
      <View
        style={{
          borderBottomColor: '#C6C1C1',
          borderBottomWidth: 1,
          marginTop: 30,
          marginBottom: 10,
          width: 300,
          alignSelf: 'center'
        }}
      />
      <View >
        <View style={{ marginTop: 20 }} />
        <ButtonComponent
          children="Tin tức"
        />
        <View style={{ marginTop: 20 }} />
        <ButtonComponent
          children="Thông tin chiến dịch"
        />
        <View style={{ marginTop: 20 }} />
        <ButtonComponent
          children="Lịch sử tiêm chủng"
        />
        <View style={{ marginTop: 20 }} />
        <ButtonComponent
          children="Kiểm tra tiêm chủng"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(15),
    backgroundColor: '#fff',
    paddingTop: moderateScale(20),
  },
  header: {
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: moderateScale(25),
    ...shadow,
  },
  box: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#29292921',
  },
  text1: {
    color: '#643333',
    fontSize: moderateScale(22),
    textAlign: 'center',
    paddingBottom: moderateScale(9),
  },
  text2: {
    color: '#1D4392',
    textAlign: 'center',
    fontSize: verticalScale(14),
  },
  button: {
    alignItems: "center",
    marginTop: moderateScale(20)
  },
})

export default CampaignScreen;