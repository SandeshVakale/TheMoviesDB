import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {Divider, Image, Text, Card} from 'react-native-elements';
import {Image_URL} from '../../Config';
import {getMovie} from '../../Services/Movie';
import {useSelector} from 'react-redux';
import styles from './styles';
function DetailScreen({route}) {
  const {movie} = useSelector(state => state.movieModel);
  const {id} = route.params;
  useEffect(() => {
    getMovie(id);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: Image_URL + movie.poster_path}}
        />
        <Divider />
        <Card>
          <Card.FeaturedTitle style={{color: 'black'}}>{movie?.tagline}</Card.FeaturedTitle>
          <Card.Divider />
          <Card.FeaturedSubtitle style={{color: 'black'}}>{movie?.overview}</Card.FeaturedSubtitle>
        </Card>
        <Card>
          <Card.Title>Genres</Card.Title>
          <Card.Divider />
          {movie?.genres.map((u, i) => {
            return (
              <View key={i}>
                <Text>{u.name}</Text>
              </View>
            );
          })}
        </Card>
        <Card>
          <Card.Title>Production Companies</Card.Title>
          <Card.Divider />
          {movie?.production_companies?.map((u, i) => {
            return (
              <View
                key={i}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                  source={{uri: Image_URL + u.logo_path}}
                />
                <Card.FeaturedSubtitle
                  style={{color: 'black', paddingLeft: 10}}>
                  {u.name}
                </Card.FeaturedSubtitle>
              </View>
            );
          })}
        </Card>
        <Card>
          <Card.Title>Production Countries</Card.Title>
          <Card.Divider />
          {movie?.production_countries?.map((u, i) => {
            return (
              <View
                key={i}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Card.FeaturedSubtitle
                  style={{color: 'black', paddingLeft: 10}}>
                  {u.name}
                </Card.FeaturedSubtitle>
              </View>
            );
          })}
        </Card>
        <Card>
          <Card.Title>Languages</Card.Title>
          <Card.Divider />
          {movie?.spoken_languages?.map((u, i) => {
            return (
              <View
                key={i}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Card.FeaturedSubtitle
                  style={{color: 'black', paddingLeft: 10}}>
                  {u.name}
                </Card.FeaturedSubtitle>
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
}

export default DetailScreen;
