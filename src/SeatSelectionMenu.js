// import React, { useState } from "react";

// const SeatSelectionMenu = ({ theater, movie, onSeatSelected }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seat) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   return (
//     <div>
//       <h2>{movie.l}</h2>
//       <h3>{theater.s}</h3>
//       <div className="seat-selection">
//         {theater.seats.map((row, i) => (
//           <div key={i} className="row">
//             {row.map((seat, j) => (
//               <div
//                 key={j}
//                 className="seat"
//                 onClick={() => handleSeatClick(seat)}
//                 data-seat-id={seat.id}
//               >
//                 {seat.status}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <button onClick={() => onSeatSelected(selectedSeats)}>Book Tickets</button>
//     </div>
//   );
// };

// export default SeatSelectionMenu;
