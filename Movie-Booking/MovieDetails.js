import React from 'react';
import { useParams, Link } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', img: 'https://via.placeholder.com/150', description: 'Description of Movie 1' },
  { id: 2, title: 'Movie 2', img: 'https://via.placeholder.com/150', description: 'Description of Movie 2' },
  // Add more movies as needed
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.img} alt={movie.title} />
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
};

export default MovieDetails;
