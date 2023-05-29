import React from 'react';
import "./Homepagecontent.css"

class Homepagecontent extends React.Component {
  render() {
    return (
      <div className="container">
        <h2><b>Upcoming Music Concerts:</b></h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img src="cert1.jpg" alt="Concert 1" style={{ width: '100%' }} />
              <div className="carousel-caption">
                <h3>Music Concert 1</h3>
                <p>Live concert featuring top artists.</p>
              </div>
            </div>
            <div className="item">
              <img src="Music_concert2.jpg" alt="Concert 2" style={{ width: '100%' }} />
              <div className="carousel-caption">
                <h3>Music Concert 2</h3>
                <p>Experience the magic of live music.</p>
              </div>
            </div>
            <div className="item">
              <img src="Music_concert3.jpg" alt="Concert 3" style={{ width: '100%' }} />
              <div className="carousel-caption">
                <h3>Music Concert 3</h3>
                <p>Don't miss this incredible music festival.</p>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Homepagecontent;
