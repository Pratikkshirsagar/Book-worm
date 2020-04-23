import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import colors from '../assets/colors';
import CustomActionButton from '../components/CustomActionButton';
import firebase from 'firebase/app';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = async () => {
    if ((email, password)) {
      setIsLoading(true);
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        if (response) {
          setIsLoading(false);
          props.navigation.navigate('LoadingScreen');
        }
      } catch (err) {
        setIsLoading(false);
        switch (err.code) {
          case 'auth/user-not-found':
            alert('A user with that email does not exist. Try signing up');
          case 'auth/invalid-email':
            alert('Please enter an email address');
        }
      }
    }
  };

  const onSignUp = async () => {
    if (email && password) {
      setIsLoading(true);
      try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if (response) {
          setIsLoading(false);
          //
        }
      } catch (err) {
        setIsLoading(false);
        alert(err.message);
      }
    } else {
      alert('Please Enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              elevation: 1000,
            },
          ]}
        >
          <ActivityIndicator size="large" color={colors.logoColor} />
        </View>
      ) : null}
      <View style={{ flex: 2, justifyContent: 'center', paddingTop: 30 }}>
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
