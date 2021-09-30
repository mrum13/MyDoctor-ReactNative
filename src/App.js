import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from './assets';

export default function App() {
  return (
    <View style={{}}>
      <ILlogo />
      <Text style={{fontSize: 20, fontWeight: '600', color: '#112340'}}>
        My Doctor
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
