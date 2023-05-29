import React, { useState , useEffect} from "react";
import { useLocation, useHistory} from 'react-router-dom';
import Navbar from './components/Navbar';
import './Description.css';
import img1 from './assets/default.jpg'

const Description = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchMovies = async () => {
      const searchQuery = new URLSearchParams(location.search).get('q');
      const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${encodeURIComponent(
        searchQuery
      )}`;

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '396aa8718dmshc36bf77ced9afb0p1e71fcjsnd3e6091cc2a8',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.d);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [location.search]);

  const handleBookTickets = (movieName) => {
    history.push({
      pathname: '/DateTimeSelector',
      state: { movieName }
    });
  };

  return (
    <div>
      <Navbar />
      <div className='card'>
        {movies.map(movie => (
          <div className='key' key={movie.id}>
            <h2>{movie.l}</h2>
            <p>{movie.s}</p>
            <img src={movie.i && movie.i.imageUrl} alt={img1} />
            <button onClick={() => handleBookTickets(movie.l)}>Book Tickets</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
