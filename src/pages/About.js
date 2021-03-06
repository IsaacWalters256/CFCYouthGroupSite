import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
//removed
function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className="aboutBottom">
            <h1>About us</h1>
            <p>Patricia's friend who was here hardly had any issues at all, but she wasn't telling the truth. Yesterday, before she left to go home, she heard that her husband is in the hospital and pretended to be surprised. It later came out that she was the person who had put him there.</p>
        </div>
    </div>
  )
}

export default About