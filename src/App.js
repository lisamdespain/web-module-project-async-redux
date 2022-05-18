import React, {useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux' // utility to "connect"
import * as actions from './state/action-creators'

function App(props) {
  const { movies, getMovieInfo } = props;
  useEffect(() =>{
    getMovieInfo()
  }, [])

  const onChange = evt => {
    const {name, value} = evt.target

  }
  const onSubmit = evt =>{
    evt.preventDefault()
    getMovieInfo()
    value = initialFormValues;
  }
  const initialFormValues = "";

  return (
    <div className="App">
      <h1>QUICK MOVIE LOOKUP</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name="name" type="text" placeholder="Enter the movie name" value={props.s}></input>
        <button>FIND MOVIE</button>
      </form>
      {/* moviesState.map(movie => 
      return (<div className='movie'><p>{movie.Title}</p>
      <p>`Year: ${movie.Year}`</p>
      <img src={movie.Poster} /></div>)) */}
      
    </div>
  );
}

export default connect(st => st, actions)(App);