import Colors from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

type GuessLogItemProps = {
  roundNumber: number;
  guess: number;
};

function GuessLogItem({ roundNumber, guess }: GuessLogItemProps) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    elevation: 4,
    shadowColor: Colors.textSecondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
