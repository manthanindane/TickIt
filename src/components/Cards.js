import React from 'react';
import './Cards.css';
import pushpa from '../assets/pushpa.png';
import brahmastra from '../assets/bramhastra.png';
import no_way_home from '../assets/No way home.png';
import rrr from '../assets/RRR.png';
import shadow from '../assets/shadow.png'


function RecommendedMovies() {
  return (
    <div className="container mt-3">
      <div className="recommended-movies-cards">
        <h2><b>Recommended Movies:</b></h2>
        <p>Select the movies you want to watch</p>

        <div className="row">
          <div className="column">
            <div className="movie-card">
              <img className="movie-card-img-top" src={pushpa} alt="Card image" />
              <div className="movie-card-body">
                <h4 className="movie-card-title"><b>Pushpa</b></h4>
                <p className="movie-card-text">Action/Crime/Drama</p>
                <button className="btncards">Watch</button>
              </div>
            </div>
          </div>
          <br />

          <div className="column">
            <div className="movie-card">
              <img className="movie-card-img-top" src={brahmastra} alt="Card image" />
              {/* <img  className="shadow" src={shadow} alt="shadow" /> */}
              <div className="movie-card-body">
                <h4 className="movie-card-title"><b>Brahmastra</b></h4>
                <p className="movie-card-text">Action/Sci-Fi/Fantasy/Drama</p>
                <button className="btncards">Watch</button>
              </div>
            </div>
          </div>
          <br />

          <div className="column">
            <div className="movie-card">
              <img className="movie-card-img-top" src={no_way_home} alt="Card image" />
              <div className="movie-card-body">
                <h4 className="movie-card-title"><b>No Way Home</b></h4>
                <p className="movie-card-text">Action/Comedy/Super-Hero</p>
                <button className="btncards">Watch</button>
              </div>
            </div>
          </div>
          <br />

          <div className="column">
            <div className="movie-card">
              <img className="movie-card-img-top" src={rrr} alt="Card image" />
              <div className="movie-card-body">
                <h4 className="movie-card-title"><b>RRR</b></h4>
                <p className="movie-card-text">Action/Adventure/Historical/</p>
                <button className="btncards">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedMovies;
