import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/HomePageTemp.jpg";
import "../styles/Home.css";
//picture, word/scripture, past activities
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1>Creswell Faith Center Youth</h1>
            <p>second text (scripture?)</p>
            <p>(another text line)</p>
            <p>Some kind of past activities section</p>
        </div>
    </div>
  )
}

export default Home