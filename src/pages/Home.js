import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/HomePageTemp.jpg";
import "../styles/Home.css";
import { Slide } from 'react-slideshow-image';

import pic1 from "../assets/HomePageTemp.jpg";
import pic2 from "../assets/TempTeam.jpg";
import pic3 from "../assets/TempPhoto.jpg";
import { ImagesearchRoller } from '@mui/icons-material';
//picture, word/scripture, past activities
function Home() {

    let selectedImage  = 0;
    const slideImages = [
        {
            url: pic1,
            caption: 'Slide 1'
        },
        {
            url: pic2,
            caption: 'Slide 2'
        },
        {
            url: pic3,
            caption: 'Slide 3'
        },
    ];
    const time = 3000;

    function changeImg() {
        console.log(selectedImage);
        document.getElementById("homeSlideShow").src = slideImages[selectedImage].url;

        if (selectedImage < slideImages.length - 1) {
            selectedImage++;
        } else {
            selectedImage = 0;
        }
    }

    setInterval(changeImg, time);

    return (
        <div className="home">
            <div className="homeTitle">
                <h1>Creswell Faith Center Youth</h1>
            </div>
            <div className="mainSection">
                <div className="infoPannel">
                    <h2>About Us</h2>
                    <p>We are the youth group for Creswell Faith Center! On this webpage you can find activity permission slips as well as information on upcoming events, more about the team, and where we meet.</p>
                    <h2>When and Where</h2>
                    <p>We meet in the back of Creswell Faith Center on 755 South Front Street. Most weeks we meet after worship, which starts at 9:30am, but on the first and fifth Sundays we meeting during worship, starting at 9:30am.</p>
                    <h2>Current Topics and Teachings</h2>
                    <p>We are currently talking about a Christianity summer survival guide, going over the acronym THINGS. THINGS stands for Time with God daily, Honest friendships, Intentionally connect with the church, Notice and serve others, Give to God, and Share God stories. </p>
                </div>
                <div className="picturePannel">
                    <img id="homeSlideShow" />
                </div>
            </div>
        </div>
    )
}

export default Home