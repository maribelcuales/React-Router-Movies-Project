import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
      <Link className="home-button-link" to="/">
      Home
      </Link>
    </div>
  </div>
);

export default SavedList;
