import React from 'react';

function TeamItem({image, name, text}) {
  return (
    <div className="teamItem">
        <div  style={{ backgroundImage: `url(${image})` }}></div>
        <h3> {name} </h3>
    </div>
  )
}

export default TeamItem