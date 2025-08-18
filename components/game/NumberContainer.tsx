import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

function NumberContainer({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  number: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.accent500,
  },
});
