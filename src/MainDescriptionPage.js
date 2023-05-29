import React, { useState } from 'react';
import Description from './components/Description';
import SeatSelectionMenu from './components/SeatSelectionMenu';

const MainDescriptionPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClick = (movieId) => {
    setSelectedMovie(movieId);
  };

  return (
    <div>
      {/* Render the Description component for the selected movie */}
      {selectedMovie && (
        <Description movieId={selectedMovie} />
      )}
      {/* Render the SeatSelectionMenu component if the selected movie is not null */}
      {selectedMovie && (
        <SeatSelectionMenu movieId={selectedMovie} />
      )}
    </div>
  );
};

export default MainDescriptionPage;
