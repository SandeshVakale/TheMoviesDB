import * as React from 'react';
import {BackHandler, Text, Button, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useEffect} from 'react';
import HomeScreen from '../Screens/Home';
import DetailScreen from '../Screens/Detail';
const AppStack = createNativeStackNavigator();

export default function Navigation() {
  const handleBackButton = () => {
    console.log('Back button is pressed');
    return true;
  };

  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => null;
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{gestureEnabled: false}}>
          <AppStack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
          <AppStack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.name })}/>
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
