import React from 'react';

function EventItem({image, name, text}) {
  return (
    <div className="eventItem">
        <div  style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> {text} </p>
    </div>
  )
}

export default EventItem