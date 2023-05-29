import React from 'react';
import Navbar from './components/Navbar'; 

import './Home.css';
// import PaymentPage from './Datenew';
// import { Carousel } from 'bootstrap';
import MyCarousel from './MyCarousel';
import RecommendedMovies from './components/Cards';
// import RazorpayButton from './RazorpayButton';
// import SeatSelector from './SeatArrangement';
// import Payment from './Payment';
function Home() {
   

  return (
    <div className='background'>

      <Navbar />
   <MyCarousel/>
   <RecommendedMovies/>
      {/* <SeatSelector/> */}
      {/* <Payment/> */}
      {/* <RazorpayButton/> */}
      {/* <PaymentPage/> */}
      {/* <Homepagecontent/> */}
      {/* <MusicFestsCarousel/> */}

      </div>
  );
}

export default Home;
