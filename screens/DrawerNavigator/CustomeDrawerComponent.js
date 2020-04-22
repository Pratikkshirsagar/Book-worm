import React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Platform } from 'react-native';
import colors from '../../assets/colors';
import { Ionicons } from '@expo/vector-icons';
import { DrawerItems } from 'react-navigation';

const CustomeDrawerComponent = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: colors.bgMain }} />
      <View
        style={{
          height: 150,
          backgroundColor: colors.bgMain,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: Platform.OS === 'android' ? 20 : 0,
        }}
      >
        <Ionicons name="ios-bookmarks" size={100} color={colors.logoColor} />
        <Text style={{ fontSize: 24, color: 'white', fontWeight: '100' }}>Book Worm</Text>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  constainer: {},
});

export default CustomeDrawerComponent;
