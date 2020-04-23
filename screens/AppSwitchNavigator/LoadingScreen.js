import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/auth';
import colors from '../../assets/colors';

const LoadingScreen = (props) => {
  let unSubscribe;

  useEffect(() => {
    checkIfLoggedIn();

    return () => {
      unSubscribe();
    };
  }, []);

  const checkIfLoggedIn = () => {
    unSubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //navigate user to home screen
        props.navigation.navigate('HomeScreen', { user });
      } else {
        // navigate user to login screen
        props.navigation.navigate('LoginStackNavigator');
      }
    });
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.logoColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgMain,
  },
});

export default LoadingScreen;
