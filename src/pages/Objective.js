import React from 'react';
import ImageLeft from '../assets/ImageLeft.jpg';
import "../styles/Objective.css";
//mission statement and objective
function Objective() {
  return (
    <div className="objective">
        <div className="leftSide"  style={{ backgroundImage: `url(${ImageLeft})` }}></div>
        <div className="rightSide">
            <div id="objective-form">
                <h1>
                  Mission Statement
                </h1>
                <p>
                  Words Words word word wordWords Words word word wordWords Words word word wordWords Words word word wordWords Words word word wordWords Words word word word
                </p>
            </div>
        </div>
    </div>
  )
}

export default Objective