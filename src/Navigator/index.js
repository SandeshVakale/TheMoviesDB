import * as React from 'react';
import {BackHandler, Text, Button, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useEffect} from 'react';
import HomeScreen from '../Screens/Home';
const AppStack = createNativeStackNavigator();

function DetailScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

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
          <AppStack.Screen
            options={{
              headerShown: false,
            }}
            name="Detail"
            component={DetailScreen}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
