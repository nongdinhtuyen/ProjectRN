import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TabBg } from './svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';


interface Props {
  bgColor?: string;
  onPress?: (e: any) => void;
};

const TabBarAdvancedButton = ({
  bgColor,
  ...props
}: Props) => {
  return (
    (
      <View
        style={styles.container}
        pointerEvents="box-none"
      >
        <TabBg
          color={bgColor}
          style={styles.background}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: bgColor }]}
          onPress={props.onPress}
        >
          <MaterialCommunityIcons name={'qrcode-scan'} size={23} color={'#000'} />
        </TouchableOpacity>
      </View>
    )
  )
};

export default TabBarAdvancedButton;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: moderateScale(75, 0),
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(50, 0),
    height: moderateVerticalScale(50, 0),
    borderRadius: 27,
  },
  buttonIcon: {
    fontSize: 16,
    color: '#000'
  }
});
