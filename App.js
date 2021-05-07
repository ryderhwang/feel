/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import QuizScreen from './src/screens/QuizScreen.js';
import FeelerScreen from "./src/screens/FeelerScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home' }}
          />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Feeler" component={FeelerScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
};


export default App;
