import React from 'react';
import ImageLeft from '../assets/MinistryTimothySripture.jpg';
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
            <div className="image-transcript">
              <p>"Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."</p>
              <p>1 Timothy 4:12</p>
            </div>
        </div>
    </div>
  )
}

export default Objective