import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Route exact path="/">
        <MovieList movies={movieList}/>
      </Route>
      <Route path="/movies/:movieID">
        <Movie movies={movieList}/>
      </Route>
    </div>
  );
};

export default App;
