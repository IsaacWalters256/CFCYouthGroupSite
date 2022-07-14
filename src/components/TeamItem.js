import React from 'react';

function TeamItem({image, name, text}) {
  return (
    <div className="teamItem">
        <div  style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> {text} </p>
    </div>
  )
}

export default TeamItem