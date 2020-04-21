import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BookCount = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>{props.title}</Text>
      <Text>{props.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookCount;
