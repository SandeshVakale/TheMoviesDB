import {WAxios} from '../index';
import {store} from '../../Store';
export const search = async query => {
  console.log(query);
  let response;
  let errorRes;
  try {
    response = await WAxios.get(`search/movie?query=${query}`);
    store.dispatch({
      type: 'movies/setMovies',
      payload: response.data,
    });
  } catch (error) {
    errorRes = error.response.data;
  }
  return response?.status === 200 ? true : errorRes;
};
