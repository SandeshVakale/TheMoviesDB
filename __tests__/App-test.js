import 'react-native';
import React from 'react';
import HomeScreen from '../src/Screens/Home';
import DetailScreen from '../src/Screens/Detail';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {movieModel} from '../src/Store/Movie';
jest.useFakeTimers();
jest.mock('react-native-elements', () => {
  return {
    SearchBar: () => {
      return <></>;
    },
    Text: () => {
      return <></>;
    },
    Card: () => {
      return <></>;
    },
    Divider: () => {
      return <></>;
    },
    Image: () => {
      return <></>;
    },
  };
});
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));
const mockStore = configureStore([]);

test('Home screen renders correctly', () => {
  const initialStore = {
    searchModel: {movies: []},
  };
  let store = mockStore(initialStore);
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Home screen renders correctly', () => {
  const initialStore = {
    searchModel: {
      movies: {
        total_results: 0,
        results: [
          {
            adult: false,
            backdrop_path: '/zJjI78peUFRIe2NPHthVhow2f60.jpg',
            genre_ids: [28, 18],
            id: 256040,
            original_language: 'te',
            original_title: 'బాహుబలి:ద బిగినింగ్',
            overview:
              'The young Shivudu is left as a foundling in a small village by his mother. By the time he’s grown up, it has become apparent that he possesses exceptional gifts. He meets the beautiful warrior princess Avanthika and learns that her queen has been held captive for the last 25 years. Shividu sets off to rescue her, discovering his own origins in the process.',
            popularity: 38.573,
            poster_path: '/9BAjt8nSSms62uOVYn1t3C3dVto.jpg',
            release_date: '2015-07-10',
            title: 'Bāhubali: The Beginning',
            video: false,
            vote_average: 7.5,
          },
        ],
      },
    },
  };
  let store = mockStore(initialStore);
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Detail screen renders correctly', () => {
  const initialStore = {
    movieModel: {movie: {}},
  };
  const route = {
    params: {
      id: 10,
      name: 'something',
    },
  };
  let store = mockStore(initialStore);
  const tree = renderer
    .create(
      <Provider store={store}>
        <DetailScreen route={route} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
