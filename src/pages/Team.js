import React from 'react';
import { TeamList } from '../helpers/TeamList';
import TeamItem from '../components/TeamItem';
import '../styles/Team.css';
import Photo1 from "../assets/TempTeam.jpg";

function Team() {
  return (
    <div className="team">
        <h1 className="teamTitle">Youth Ministry Team</h1>
        <div className="leaderSection">
            <div className="leaderImage" style={{ backgroundImage: `url(${Photo1})` }}></div>
            <h1 className="leaderTitle">Diane O'Connor</h1>
            <div className="leaderParagraph">text text text texttext text ttext text text texttext text ttext text text texttext text ttext text text texttext text ttext text text texttext text ttext text text texttext text ttext text text texttext text ttext text text texttext text t</div>
        </div>
        <div className="teamList">
            {TeamList.map((teamItem, key) => {
                return <TeamItem key={key} image={teamItem.image} name={teamItem.name} />
            })}
        </div>
    </div>
  )
}

export default Team