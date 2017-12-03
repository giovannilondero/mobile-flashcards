import { Button as RNButton } from 'react-native-elements';
import { red, lightgreen, white, blue } from '../../utils/colors';
import { StyleSheet, View } from 'react-native';
import React from 'react';

const getStandardStyle = type => {
  switch (type) {
    case 'primary':
      return styles.btnPrimary;
    case 'primaryInvert':
      return styles.btnPrimaryInvert;
    case 'secondary':
      return styles.btnSecondary;
    case 'warning':
      return styles.btnWarning;
    default:
      return {};
  }
};

const getColor = type => {
  switch (type) {
    case 'primary':
      return white;
    case 'primaryInvert':
      return lightgreen;
    case 'warning':
      return white;
    default:
      return white;
  }
};

const Button = ({ type, buttonStyle = {}, ...props }) => {
  const style = getStandardStyle(type);
  const color = getColor(type);

  return (
    <View>
      <RNButton
        color={color}
        buttonStyle={[styles.button, style, buttonStyle]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  btnPrimary: {
    backgroundColor: lightgreen,
  },
  btnPrimaryInvert: {
    backgroundColor: white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: lightgreen,
  },
  btnSecondary: {
    backgroundColor: blue,
  },
  btnWarning: {
    backgroundColor: red,
  },
});

export default Button;
