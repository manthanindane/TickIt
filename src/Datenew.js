import React from 'react';
import './Global.css';
import './Date-Time.css';
// import vectorIcon2 from './vector-icon2.png';
import RRRImage from './assets/RRR.png';


const PaymentPage = () => {
  return (
    
    <div className="date-and-time">
      <div className="date-and-time-child"></div>
      <b className="rrr-rise-roar">RRR (Rise Roar Revolt) Hindi-2D</b>
      <div className="date-and-time-item"></div>

      <div className="date-cards">
        <div className="date-cards1">
          <div className="date-cards-child selectable-time"></div>
          <div className="date-cards-item selectable-time"></div>
          <div className="date-cards-inner selectable-time"></div>
          <div className="rectangle-div selectable-time"></div>
        </div>
        <div className="date-card-current">
          <b className="mon">MON</b>
          <b className="b">01</b>
          <b className="may">MAY</b>
        </div>
        <div className="date-card-current1">
          <b className="mon">TUE</b>
          <b className="b">02</b>
          <b className="may">MAY</b>
        </div>
        <div className="date-card-current2">
          <b className="mon">WED</b>
          <b className="b">03</b>
          <b className="may">MAY</b>
        </div>
        <div className="date-card-current3">
          <b className="mon">THU</b>
          <b className="b">03</b>
          <b className="may">MAY</b>
        </div>
      </div>

      {/* Time slots */}
      <div className="date-and-time-inner"></div>
      <div className="times-1">
        <div className="times-1-child"></div>
        <div className="times-1-item"></div>
        <b className="e-square-oasis-ac">E-SQUARE Oasis (A.C): Solapur</b>
        <div className="time-slots">
          <div className="time-slots-child selectable-time" id="rectangle11"></div>
          <div className="time-slots-item selectable-time"></div>
          <div className="time-slots-inner selectable-time"></div>
          <div className="am selectable-time">9:30 AM</div>
          <div className="info">
            {/* <img className="vector-icon2" alt="vector-icon2" src={vectorIcon2} /> */}
            <div className="info1">info</div>
          </div>
          <div className="pm selectable-time">12:30 PM</div>
          <div className="pm1 selectable-time">7:30 PM</div>
        </div>
      </div>
      <div className="times-2">
        <div className="times-2-child"></div>
        <b className="bhagwat-uma-mandir">Bhagwat Uma Mandir: Solapur</b>
        <div className="time-slots1">
          <div className="time-slots-child selectable-time"></div>
          <div className="time-slots-item selectable-time"></div>
          <div className="am selectable-time">9:30 AM</div>
          <div className="info2">
            {/* <img className="vector-icon2" alt="vector-icon2" src={vectorIcon2} /> */}
            <div className="info1">info</div>
          </div>
          <div className="pm selectable-time">12:30 PM</div>
        </div>
      </div>
      <div className="times-3">
        <div className="times-2-child"></div>
        <b className="bhagwat-uma-mandir">Prabhat Talkies: Solapur</b>
        <div className="time-slots2">
          <div className="time-slots-child3 selectable-time"></div>
          <div className="time-slots-child4 selectable-time"></div>
          <div className="info4">
            {/* <img className="vector-icon2" alt="vector-icon2" src={vectorIcon2} /> */}
            <div className="info1">info</div>
          </div>
          <div className="pm3 selectable-time">12:30 PM</div>
          <div className="pm4 selectable-time">7:30 PM</div>
        </div>
      </div>

      <img className="extras-icon" alt="" src={RRRImage} />
    </div>
  );
};

export default PaymentPage;
