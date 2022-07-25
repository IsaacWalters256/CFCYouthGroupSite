import React from 'react';
import { EventList } from '../helpers/EventList';
import EventItem from '../components/EventItem';
import '../styles/Event.css';
import {PrintImage} from '../helpers/Printing';
import Photo1 from "../assets/TempPhoto.jpg";

function Events() {
  let fn = function(e) {
    let printableImage = e.currentTarget.dataset && e.currentTarget.dataset.formImage;
    PrintImage(printableImage);
  };

  return (
    <div className="event">
        <h1 className="eventTitle">Upcoming Youth Events</h1>
        <p className="eventsDesc">When arriving at an event, please have any money if needed and the signed youth permision forms. Each event has its own form, which you can print on the buttons bellow, but if you need the yearly permision form, click here:</p>
        <button className="button-form formPrinter" onClick={fn} data-form-image={Photo1}><b>Yearly Permision Form</b></button>
        <div className="eventList">
            {EventList.map((eventItem, key) => {
                return <EventItem key={key} itemDetails={eventItem} />
            })}
        </div>
    </div>
  )
}

export default Events