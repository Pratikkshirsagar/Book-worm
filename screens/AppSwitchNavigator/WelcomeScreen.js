import React from 'react';
import { View, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../../assets/colors';
import CustomActionButton from '../../components/CustomActionButton';

const WelcomeScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgMain }}>
      <View
        style={{
          flex: 1,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="ios-bookmarks" size={150} color={colors.logoColor} />
        <Text style={{ fontSize: 50, fontWeight: '100', color: 'white' }}>Book Worm</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <CustomActionButton
          style={{
            width: 200,
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor: colors.bgPrimary,
            marginBottom: 10,
          }}
          title="Login in"
          onPress={() => props.navigation.navigate('LoginScreen')}
        >
          <Text style={{ fontWeight: '100', color: 'white' }}>Login</Text>
        </CustomActionButton>
      </View>
    </View>
  );
};

export default WelcomeScreen;
