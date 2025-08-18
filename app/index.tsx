import Colors from '@/constants/Colors';
import GameOverScreen from '@/screens/GameOverScreen';
import GameScreen from '@/screens/GameScreen';
import StartGameScreen from '@/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  function onPickNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function onGameOverHandler(rounds: number) {
    setGameOver(true);
    setRoundsNumber(rounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRoundsNumber(0);
    setGameOver(true);
  }

  let screen = <StartGameScreen onPickNumber={onPickNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={onGameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary600, Colors.accent500]}
    >
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
