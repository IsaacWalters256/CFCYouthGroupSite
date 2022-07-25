import React from 'react';
import {PrintImage} from '../helpers/Printing';


function EventItem(itemDetails) {
  let image = itemDetails.itemDetails.image;

  let fn = function(e) {
    let printableImage = e.currentTarget.dataset && e.currentTarget.dataset.formImage;
    //console.log(printableImage);
    PrintImage(printableImage);

  };

  return (
    <div className="eventItem" data-form-image={itemDetails.itemDetails.form}>
        <div className="eventImage" style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {itemDetails.itemDetails.title} </h1>
        <h3> {itemDetails.itemDetails.location} </h3>
        <button className="button-form formPrinter" onClick={fn} data-form-image={itemDetails.itemDetails.form}><b>Print Sign Up Form</b></button>
        <p> <i>{itemDetails.itemDetails.date} at {itemDetails.itemDetails.time}</i></p>
        <p> {itemDetails.itemDetails.fee} </p>
        <p> {itemDetails.itemDetails.description} </p>
    </div>
  )
}

export default EventItem