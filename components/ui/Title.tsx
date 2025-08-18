import { StyleSheet, Text } from 'react-native';

import Colors from '@/constants/Colors';
import React from 'react';


function Title({ children }: { children: React.ReactNode }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginVertical: 24,
    borderWidth: 2,
    borderColor: Colors.textPrimary,
    padding: 12,
    borderRadius: 8,
    fontFamily: 'open-sans-bold',
  }
});