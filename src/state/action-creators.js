
import * as types from './action-types';
import axios from "axios";

const initialOptions = {
  method: 'GET',
  url: 'https://movie-database-alternative.p.rapidapi.com/',
  params: {s: 'Avengers Endgame', r: 'json', page: '1'},
  headers: {
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    'X-RapidAPI-Key': '8f254d7b64mshfae3da2ec51aae3p1bbccajsnc7a363cec6b8'
  }
}; 

// we will get data, on success
    // we will dispatch an action
    // to the reducer
export function getMovieInfo(){
   return function (dispatch){
axios.request(initialOptions)
.then(res => {
    console.log(res.data.Search)
	dispatch({type:types.GET_MOVIE_INFO, payload: res.data.Search});
}).catch(function (error) {
	console.error(error);
});
   }
}