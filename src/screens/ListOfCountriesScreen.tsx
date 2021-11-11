import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import ButtonComponent from '../components/ButtonComponent'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import customStyles from '../styles'
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';

interface Props {
  listOfCountries: DataProvider
  fetchListOfCountries: (params?: any, callback?: any) => void,
}
const shadow = customStyles.shadow

const generateArray = (n: any = 300) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 'a';
  }
  return arr;
}
let { width, height } = Dimensions.get('window')

export default function ListOfCountriesScreen(props: Props) {


  const [dataProvider, setDataProvider] = useState(new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(generateArray(20)))
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    props.fetchListOfCountries({}, loadData)
  }, [])


  const loadData = (data: any) => {
    setDataProvider(dataProvider.cloneWithRows(data.detail))
    setLoading(false);
  }

  useEffect(() => {
    console.log(dataProvider)
  }, [dataProvider])

  const layoutProvider = new LayoutProvider((index) => {
    return index;
  }, (type, dimension) => {
    dimension.width = width;
    dimension.height = moderateScale(50);
  })

  const rowRenderer = (type: any, data: any) => {
    return (
      <View style={styles.rowsBody}>
        <Text style={[styles.rowBody, { width: moderateScale(150) }]}>{data.name}</Text>
        <Text style={[styles.rowBody, { width: moderateScale(130) }]}>{data.cases}</Text>
        <Text style={styles.rowBody}>{data.death}</Text>
        <Text style={styles.rowBody}>{data.casesToday}</Text>
      </View>
    )
  }

  return (
    <ScrollView horizontal={true} >
      <View style={{ flex: 1 }}>
        <View style={styles.rowsHeader}>
          <Text style={[styles.rowHeader, { width: moderateScale(150) }]}>Khu vực</Text>
          <Text style={[styles.rowHeader, { width: moderateScale(130) }]}>Tổng số ca</Text>
          <Text style={styles.rowHeader}>Số ca tử vong</Text>
          <Text style={styles.rowHeader}>Số ca mới</Text>
        </View>
        <RecyclerListView
          dataProvider={dataProvider}
          rowRenderer={rowRenderer}
          layoutProvider={layoutProvider}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(25),
    paddingVertical: moderateVerticalScale(20),
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
  rowsHeader: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    backgroundColor: '#fafafa'
  },
  rowHeader: {
    fontSize: moderateScale(18),
    width: moderateScale(100),
    color: '#000',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    paddingHorizontal: 10,
    textAlign: 'left',
    paddingVertical: 5
  },
  rowsBody: {
    flexDirection: 'row',
  },
  rowBody: {
    fontSize: moderateScale(18),
    width: moderateScale(100),
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingHorizontal: 10,
    textAlign: 'left'
  },
})
