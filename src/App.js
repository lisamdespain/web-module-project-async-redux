import React, {useState, useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux' // utility to "connect"
import * as actions from './state/action-creators'

function App(props) {
  const [searched, setSearched] = useState('')
  const { movies, getMovieInfo, getNewMovieInfo } = props;
  useEffect(() =>{
    getMovieInfo()
  }, [])

  const onChange = evt => {
    setSearched(evt.target.value)

  }
  const onSubmit = evt =>{
    console.log(evt)
    evt.preventDefault()
    getNewMovieInfo(searched)
    // const initialFormValues = "";
    // evt.target.value = initialFormValues;
  }
  

  return (
    <div className="App">
      <h1>QUICK MOVIE LOOKUP</h1>
      <form onSubmit={onSubmit} >
        <input onChange={onChange} name="name" type="text" placeholder="Enter the movie name" ></input>
        <button>FIND MOVIE</button>
      </form>
      {movies.map(movie => 
      (<div className="movie-card" key={movie.imdbID} >
      <div className="movie-info">
      <p className="title">{movie.Title}</p>
      <p className="year">Year: {movie.Year}</p></div>
      <div className="image-container"><img src={movie.Poster} /></div>
      </div>))
}
    </div>
  );
}

export default connect(st => {
  console.log(st)
  return {movies: st}
}
  , actions)(App);