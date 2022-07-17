import React from 'react';
import { EventList } from '../helpers/EventList';
import EventItem from '../components/EventItem';
import '../styles/Event.css';

function Events() {
  return (
    <div className="event">
        <h1 className="eventTitle">Our Upcoming Events</h1>
        <div className="eventList">
            {EventList.map((eventItem, key) => {
                return <EventItem key={key} itemDetails={eventItem} />
            })}
        </div>
    </div>
  )
}

export default Events