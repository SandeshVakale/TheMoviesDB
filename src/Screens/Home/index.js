import React, {useState} from 'react';
import {FlatList, TouchableNativeFeedback} from 'react-native';
import moment from 'moment';
import {Card, Image, Text, SearchBar} from 'react-native-elements';
import {Image_URL} from '../../Config';
import {SafeAreaView} from 'react-native-safe-area-context';
import {search} from '../../Services/Search';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import styles from './styles';
function HomeScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const {movies} = useSelector(state => state.moviesModel);
  const onSearch = () => {
    search(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        lightTheme
        round
        value={query}
        placeholder="Search Movies"
        onCancel={() => setQuery('')}
        onChangeText={text => setQuery(text)}
        onSubmitEditing={onSearch}
      />
      {movies.length <= 0 && (
        <Text style={{textAlign: 'center'}}>Start searching for movies</Text>
      )}
      {movies?.total_results === 0 ? (
        <Text style={{textAlign: 'center'}}>No Results found for {query}</Text>
      ) : (
        <FlatList
          data={movies?.results}
          renderItem={(item, index) => (
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Detail')}>
              <Card key={index}>
                <Card.FeaturedTitle
                  style={{color: 'black', textAlign: 'center'}}>
                  {item.item.original_title}
                </Card.FeaturedTitle>
                <Card.Divider />
                <Image
                  style={styles.image}
                  resizeMode="contain"
                  source={{uri: Image_URL + item.item.backdrop_path}}
                />
                <Card.Divider />
                <Card.Title style={{color: 'black'}}>
                  {moment(item.item.release_date).format('MMM DD, YYYY')}
                </Card.Title>
                <Card.Divider />
                <Card.FeaturedSubtitle style={{color: 'black'}}>
                  {item.item.overview}
                </Card.FeaturedSubtitle>
              </Card>
            </TouchableNativeFeedback>
          )}
        />
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;
