import Colors from '@/constants/Colors';
import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

function InstructionText({ children, style }: { children: ReactNode; style?: object }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
  },
});
