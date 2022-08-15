import React, { Component, useEffect } from "react";

import logo from '../img/Twitter-logo.png';
import homeIcon from '../img/home-icon.png';
import exploreicon from '../img/hashtags-icon.png';
import notiicon from '../img/bell-icon.png';
import mailicon from '../img/mail-icon.png';
import listicon from '../img/list-icon.png';


import '../css/Twheader.css'

class Twheader extends React.Component {

    render() {
        return (

            <div className="Tw-header">


                <div className="Tw-row-p">
                    <img src={logo} className="Tw-logo" />
                </div>

                <div className='Tw-row'>
                    <img src={homeIcon} className="Tw-icon" />
                    <p className='Tw-logo-text'>Home</p>
                </div>

                <div className='Tw-row'>
                    <img src={exploreicon} className="Tw-icon" />
                    <p className='Tw-logo-text'>Explore</p>
                </div>

                <div className='Tw-row'>
                    <img src={notiicon} className="Tw-icon" />
                    <p className='Tw-logo-text'>Notifications</p>
                </div>

                <div className='Tw-row'>
                    <img src={mailicon} className="Tw-icon" />
                    <p className='Tw-logo-text'>Messages</p>
                </div>
                <div className='Tw-row'>
                    <img src={listicon} className="Tw-icon" />
                    <p className='Tw-logo-text'>Lists</p>
                </div>

                <div className='Tw-row'>
                    <button className="hidetweet" onClick={createTwiit}>Tweet</button>
                </div>


            </div>

        );
    }

}

function createTwiit() {
    console.log("prueba de tweet")
    let x = document.getElementById("tweetModal");
    x.style.display = 'block'


}



export default Twheader