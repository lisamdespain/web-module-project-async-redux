import React, {useState, useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux' 
import * as actions from './state/action-creators'

function App(props) {
  // quick set state based on user input, passed into getNewMovieInfo
  const [searched, setSearched] = useState('')
  const { movies, getMovieInfo, getNewMovieInfo } = props;
  useEffect(() =>{
    getMovieInfo()
  }, [])

  const onChange = evt => {
    setSearched(evt.target.value)

  }
  const onSubmit = evt =>{
    evt.preventDefault()
    getNewMovieInfo(searched)
    document.getElementById('myform').reset();
  }
  

  return (
    <div className="App">
      <h1>QUICK MOVIE LOOKUP</h1>
      <form onSubmit={onSubmit} id="myform" >
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
  return {movies: st}
}
  , actions)(App);