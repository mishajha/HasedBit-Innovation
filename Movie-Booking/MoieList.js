import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const movies = [
  { id: 1, title: 'Movie 1', img: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Movie 2', img: 'https://via.placeholder.com/150' },
  // Add more movies as needed
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={movie.img} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
