import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropsTypes from 'prop-types';

function getPosition(position) {
  switch (position) {
    case 'left':
      return { position: 'absolute', bottom: 20, left: 20 };

    default:
      return { position: 'absolute', bottom: 20, right: 20 };
  }
}

const CustomActionButton = ({ children, onPress, style, position }) => {
  const floatingActionButton = position ? getPosition(position) : [];
  return (
    <TouchableOpacity style={floatingActionButton} onPress={onPress}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#deada5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

CustomActionButton.PropsTypes = {
  onPress: PropsTypes.func.isRequired,
  children: PropsTypes.element.isRequired,
  style: PropsTypes.object,
};

export default CustomActionButton;
