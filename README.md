# Welcome👋

This project is a React Native application using Expo, featuring a "Guess My Number" game. Below is a comprehensive guide on how the game is structured and functions.

## 📋 Table of Contents

- [Overview](#overview)
- [Key Components](#key-components)
- [How the Game Works](#how-the-game-works)
- [Get Started](#get-started)

## 📖 Overview

The "Guess My Number" game lets the user pick a number between 1 and 99. The app attempts to guess the number by making random guesses, and the user provides feedback on whether the guess is too high or too low. The game continues until the app correctly guesses the number.

## 🛠 Key Components

- **[StartGameScreen.tsx](screens/startgamescreen.tsx)**: Allows the user to input a number and starts the game.
- **[GameScreen.tsx](screens/gamescreen.tsx)**: Handles the guessing logic and user feedback.
- **[GameOverScreen.tsx](screens/gameoverscreen.tsx)**: Displays the game over screen with results.
- **[NumberContainer.tsx](components/game/numbercontainer.tsx)**: Displays the current guess.
- **[GuessLogItem.tsx](components/game/guesslogitem.tsx)**: Logs all guesses made by the app.
- **[index.tsx](app/index.tsx)**: Main entry point managing screen transitions.

## 🔄 How the Game Works

1. **Start**: The user inputs a number on the [StartGameScreen.tsx](screens/startgamescreen.tsx). Once confirmed, the game transitions to the [GameScreen.tsx](screens/gamescreen.tsx).
2. **Guessing**: The app makes an initial guess and displays it. The user can then indicate if the guess is too high or too low.
3. **Feedback Loop**: Based on the user's feedback, the app adjusts its guessing range and makes a new guess.
4. **Game Over**: When the app guesses the correct number, the [GameOverScreen.tsx](screens/gameoverscreen.tsx) is displayed, showing the number of attempts taken.

## 🚀 Get Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the app**

   ```bash
   npm start
   ```

   You can open the app in a:

   - Development build
   - Android emulator
   - iOS simulator
   - Expo Go, a limited sandbox for trying out app development with Expo
