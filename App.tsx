/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import{Provider as PaperProvider, TextInput} from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';
import { theme } from './App.style';
import { RegisterScreen } from './app/screens/login/register/register.screen';
import HomeScreen from './app/screens/home/home.screen';

const App = () => {


  return (
    <PaperProvider theme={theme}>
        <HomeScreen/>
    </PaperProvider>
  );
  
};

export default App;
