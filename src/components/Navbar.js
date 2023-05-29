import React from "react";
import Dropdown from "./dropdown";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic to handle successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
  };

  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    const searchQuery = encodeURIComponent(event.target.elements.search.value);
    history.push(`/description?q=${searchQuery}`);
  };

  return (
    <div className="nav">
      <div className="nav-item-left">
        <svg
          width="102"
          height="56"
          viewBox="0 0 102 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="102" height="56" fill="black" />
          <rect
            x="10.5"
            y="7.5"
            width="82"
            height="41"
            fill="black"
            stroke="white"
          />
          <path
            d="M23.7911 37V19.6514H28.2021V37H23.7911ZM18.4436 23.3232V19.5282H33.5496V23.3232H18.4436ZM35.2356 37V24.9496H39.5481V37H35.2356ZM37.3795 23.545C36.7388 23.545 36.2048 23.3314 35.7777 22.9043C35.3506 22.4607 35.137 21.9104 35.137 21.2532C35.137 20.6125 35.3506 20.0704 35.7777 19.6268C36.2048 19.1832 36.7388 18.9614 37.3795 18.9614C38.0531 18.9614 38.5952 19.1832 39.0059 19.6268C39.4331 20.0704 39.6466 20.6125 39.6466 21.2532C39.6466 21.9104 39.4331 22.4607 39.0059 22.9043C38.5952 23.3314 38.0531 23.545 37.3795 23.545ZM48.0102 37.2711C46.7288 37.2711 45.5705 37 44.5355 36.4579C43.517 35.9157 42.712 35.1682 42.1205 34.2154C41.5291 33.2625 41.2334 32.1864 41.2334 30.9871C41.2334 29.7714 41.5291 28.6871 42.1205 27.7343C42.7284 26.7814 43.5416 26.0339 44.5602 25.4918C45.5952 24.9332 46.7616 24.6539 48.0595 24.6539C48.9959 24.6539 49.8502 24.81 50.6223 25.1221C51.3945 25.4343 52.1009 25.9025 52.7416 26.5268L50.0309 29.2375C49.7845 28.9911 49.497 28.8104 49.1684 28.6954C48.8563 28.5639 48.4866 28.4982 48.0595 28.4982C47.5995 28.4982 47.1805 28.605 46.8027 28.8186C46.4413 29.0157 46.1455 29.295 45.9155 29.6564C45.702 30.0179 45.5952 30.4532 45.5952 30.9625C45.5952 31.4554 45.702 31.8907 45.9155 32.2686C46.1455 32.63 46.4413 32.9175 46.8027 33.1311C47.1805 33.3446 47.5995 33.4514 48.0595 33.4514C48.5195 33.4514 48.9138 33.3775 49.2423 33.2296C49.5709 33.0818 49.8584 32.8682 50.1048 32.5889L52.8402 35.2996C52.1666 35.9568 51.4355 36.4496 50.647 36.7782C49.8748 37.1068 48.9959 37.2711 48.0102 37.2711ZM62.13 37L58.335 30.6914L62.1053 24.9496H66.8121L62.13 31.4307L62.2532 29.8536L67.0585 37H62.13ZM54.3921 37V19.0354H58.68V37H54.3921Z"
            fill="white"
          />
          <path
            d="M68.5735 37V19.5282H72.9846V37H68.5735ZM77.4372 37V19.9718H81.7251V37H77.4372ZM74.7758 28.5229V24.9496H84.3865V28.5229H74.7758Z"
            fill="#FF0000"
          />
        </svg>

        <form className="searchbar" onSubmit={handleClick}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Enter your search term"
            required
          />
          <button className="navsubmit" type="submit">Search</button>
        </form>
      </div>

      <div className="nav-item-right">
        <Dropdown />
        <div>
          {isLoggedIn ? (
            <Logout onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
          {/* <Logout/> */}
        </div>
      </div>

    </div>
  );
};

export default Navbar;
