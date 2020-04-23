import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import colors from '../assets/colors';
import firebase from 'firebase/app';
import 'firebase/auth';

const SettingsScreen = (props) => {
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      props.navigation.navigate('WelcomeScreen');
    } catch (err) {
      alert('Unable to sign out');
    }
  };
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
        onPress={signOut}
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
