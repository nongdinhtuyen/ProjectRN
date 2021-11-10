import React from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'

interface Props {

}

function VaccinComponent<NavigationFunctionComponent>(props: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>Tổng quan</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 20,
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
          children="Đăng ký tiêm chủng"
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
      <View>
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
    padding: 15,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
    padding: 10,
    paddingBottom: 25,
  },
  box: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#29292921',
  },
  text1: {
    color: '#643333',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 9,
  },
  text2: {
    color: '#1D4392',
    textAlign: 'center',
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 20
  },
})

VaccinComponent.options = () => {
  return {
  }
}

export default VaccinComponent;