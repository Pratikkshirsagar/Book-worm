import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from '../assets/colors';
import CustomActionButton from '../components/CustomActionButton';
import firebase from 'firebase/app';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = () => {};
  const onSignUp = async () => {
    if (email && password) {
      try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert('Please Enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', paddingTop: 30 }}>
        <TextInput
          style={styles.textInput}
          placeholder="abc@example.com"
          placeholderTextColor={colors.bgTextInputDark}
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter password"
          placeholderTextColor={colors.bgTextInputDark}
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />
        <View style={{ alignItems: 'center' }}>
          <CustomActionButton
            style={[styles.loginButtons, { borderColor: colors.bgPrimary }]}
            onPress={onSignIn}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </CustomActionButton>
          <CustomActionButton
            style={[styles.loginButtons, { borderColor: colors.bgError }]}
            onPress={onSignUp}
          >
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
