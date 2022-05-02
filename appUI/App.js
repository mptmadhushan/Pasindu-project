import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import StackNavigator from "./StackNavigator";
import Tabs from "./navigation/Tabs"

import useFonts from './hooks/useFonts';

export default function App() {

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }

  return (

    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

  );
}



