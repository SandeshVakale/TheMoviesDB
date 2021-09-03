import {WAxios} from '../index';
import {store} from '../../Store';
export const getMovie = async movie_id => {
  let response;
  let errorRes;
  try {
    response = await WAxios.get(`movie/${movie_id}`);
    store.dispatch({
      type: 'movies/setMovie',
      payload: response.data,
    });
  } catch (error) {
    errorRes = error.response.data;
  }
  return response?.status === 200 ? true : errorRes;
};
