import React, {useState} from 'react';
import Logo from '../assets/CFCROUNDWHITE.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

//export const Navbar = (props) => {
function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };
    return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/events">Events</Link>
                <Link to="/objective">Ministry</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/events">Events</Link>
            <Link to="/objective">Ministry</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar
//const mapStateToProps = (state) => ({})

//const mapDispatchToProps = {}

//export default connect(mapStateToProps, mapDispatchToProps)(Navbar)