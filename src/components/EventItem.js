import React from 'react';

function EventItem(itemDetails) {
  let image = itemDetails.itemDetails.image;

  return (
    <div className="eventItem">
        <div className="eventImage" style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {itemDetails.itemDetails.title} </h1>
        <h3> {itemDetails.itemDetails.location} </h3>
        <p> <i>{itemDetails.itemDetails.date} at {itemDetails.itemDetails.time}</i></p>
        <p> {itemDetails.itemDetails.fee} </p>
        <p> {itemDetails.itemDetails.description} </p>
    </div>
  )
}

export default EventItem