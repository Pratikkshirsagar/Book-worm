import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from '../assets/colors';
import CustomActionButton from '../components/CustomActionButton';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput
          style={styles.textInput}
          placeholder="abc@example.com"
          placeholderTextColor={colors.bgTextInputDark}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter password"
          placeholderTextColor={colors.bgTextInputDark}
          secureTextEntry
        />
        <View style={{ alignItems: 'center' }}>
          <CustomActionButton style={[styles.loginButtons, { borderColor: colors.bgPrimary }]}>
            <Text style={{ color: 'white' }}>Login</Text>
          </CustomActionButton>
          <CustomActionButton style={[styles.loginButtons, { borderColor: colors.bgError }]}>
            <Text style={{ color: 'white' }}>sign up</Text>
          </CustomActionButton>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain,
  },
  textInput: {
    height: 50,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    marginHorizontal: 40,
    marginBottom: 10,
    color: colors.txtWhite,
    paddingHorizontal: 10,
  },
  loginButtons: {
    borderWidth: 0.5,
    backgroundColor: 'transparent',
    marginTop: 10,
    width: 200,
  },
});

export default LoginScreen;
