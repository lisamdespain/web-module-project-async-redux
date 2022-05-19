
import * as types from './action-types';
import axios from "axios";
// request requirements from API
const initialOptions = {
  method: 'GET',
  url: 'https://movie-database-alternative.p.rapidapi.com/',
  params: {s: 'Avengers', r: 'json', page: '1'},
  headers: {
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    'X-RapidAPI-Key': ''
  }
}; 

// pulls in initial list of movies
export function getMovieInfo(){
   return function (dispatch){
axios.request(initialOptions)
.then(res => {
	dispatch({type:types.GET_MOVIE_INFO, payload: res.data.Search});
}).catch(function (error) {
	console.error(error);
});
   }
}

// adjusts required object for API request based on form in App
const searchedMovie = (movie) => {
    return ({
    ...initialOptions,
  params: {s: movie, r: 'json', page: '1'},
    })
}

// new api call based on user input on movie title
export function getNewMovieInfo(movie){
    return function (dispatch){
 axios.request(searchedMovie(movie))
 .then(res => {
     dispatch({type:types.GET_NEW_MOVIE_INFO, payload: res.data.Search});
 }).catch(function (error) {
     console.error(error);
 });
    }
 }