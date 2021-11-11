import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import ButtonComponent from '../components/ButtonComponent'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import customStyles from '../styles'

const shadow = customStyles.shadow
interface Props {

}

export default function RegisterScreen(props: any) {

  const [selectedLanguage, setSelectedLanguage] = useState('12312321');
  const [date, setDate] = useState(new Date())

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../assets/icon1.png')}
        />
        <Text style={{ marginTop: moderateScale(30), marginBottom: moderateScale(10) }}>
          Lựa chọn chiến dịch tiêm chủng
        </Text>
        <View
          style={styles.select}
        >
          <Picker
            style={{
              width: moderateScale(280),
              height: 30,
            }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScriptJavaScriptJav" value="js" />
          </Picker>
        </View>
        <Text>
          Lựa chọn ngày đăng ký tiêm chủng
        </Text>
        <View style={styles.date}>
          <DatePicker
            locale="vi"
            textColor='#000'
            fadeToColor='none'
            mode='date'
            style={{ 
              borderRadius: 20,
              height: verticalScale(185), 
              width: moderateScale(280),
             }}
            date={date}
            onDateChange={setDate}
          />
        </View>
        <ButtonComponent
          buttonStyle={{
            marginTop: moderateScale(20),
            marginBottom: moderateScale(20),
          }}
          textStyle={{
          }}
        >
          Xác nhận đăng ký
        </ButtonComponent>
        <ButtonComponent onPress={() => props.navigation.popToTop()}>
          Thoát
        </ButtonComponent>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(25),
    paddingVertical: moderateVerticalScale(20),
    alignItems: 'center',
    // width: moderateScale(280)
  },
  select: {
    borderColor: '#F5F7FD',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: moderateScale(20),
    backgroundColor: '#F5F7FD',
   ...shadow,
  },
  date: {
    marginTop: moderateScale(10),
    backgroundColor: '#F5F7FD',
    borderRadius: 27,
    ...shadow,
  },
})
