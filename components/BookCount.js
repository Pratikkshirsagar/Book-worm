import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropsTypes from 'prop-types';

const BookCount = ({ title, count }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 20 }}>{title}</Text>
    <Text>{count}</Text>
  </View>
);

BookCount.PropsTypes = {
  count: PropsTypes.number.isRequired,
  title: PropsTypes.string,
};

const styles = StyleSheet.create({});

export default BookCount;
