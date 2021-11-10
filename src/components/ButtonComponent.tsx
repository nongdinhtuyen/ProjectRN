import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const defaultProps = {
  bgColor: '',
  buttonStyle: {},
  textStyle: {},
  textColor: '',
  fontSize: null,
  border: false,
  onPress: () => { },
  children: '',
};

interface Props {
  title?: string;
  textColor?: string;
  bgColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  fontSize?: number | any;
  onPress?: () => void;
  border?: boolean;
  children: React.ReactNode,
}


export default function ButtonComponent(props: Props) {
  const {
    children,
    fontSize,
    bgColor,
    buttonStyle,
    textStyle,
    textColor,
    title,
    onPress,
    border = false,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.button,
          buttonStyle,
        ]}
        onPress={onPress}
        underlayColor='#5E82CC'
      >
        <Text
          style={[
            styles.text,
            textStyle,
          ]}
        >{children}</Text>
      </TouchableHighlight>
    </View>
  )
}

ButtonComponent.defaultProps = defaultProps;


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    width: moderateScale(280),
    backgroundColor: '#F5F7FD',
    elevation: 3,
    padding: moderateScale(12),
    borderRadius: 20,
    // width: "100%",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  text: {
    textAlign: 'center',
    color: '#000',
  }
})
