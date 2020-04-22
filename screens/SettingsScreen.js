import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import colors from '../assets/colors';
const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <CustomActionButton
        style={{
          width: 200,
          backgroundColor: 'transparent',
          borderWidth: 0.5,
          borderColor: colors.bgError,
        }}
        title="Sign Up"
        onPress={() => props.navigation.navigate('WelcomeScreen')}
      >
        <Text style={{ fontWeight: '100', color: 'white' }}>Log Out</Text>
      </CustomActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgMain,
  },
});

export default SettingsScreen;
