import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {search} from '../../Services/Search';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
function HomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    search('batman');
  }, []);

  const {movies} = useSelector(state => state.moviesModel);

  console.log('movies', movies);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
