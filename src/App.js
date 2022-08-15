
import React, { useEffect, useState } from 'react';
import Twheader from './components/Twheader';
import TweetModal from './components/TweetModal';

import PostCard from './components/PostCard';
import Login from './components/login';
import { collection, getDocs } from "firebase/firestore";
import db from './firebase/firebaseConfig'
import './App.css';
import { async } from '@firebase/util';


function App() {

  useEffect(() => {
    var hidetweet = document.querySelector(".hidetweet");
    var AID = localStorage.getItem('AID')
    console.log(AID)

    if (AID !== "" && AID != null && AID !== "null") {
      hidetweet.setAttribute("class", "btn btn-primary Tw-btn")
    }

    let cUserTag = document.getElementsByClassName("login-user-tag");
    for (let i = 0; i < cUserTag.length; i++) {
      console.log(cUserTag[i]);
    }



  })





  return (
    <div className="App">
      <Twheader />

      <div className='home'>
        <h2>Home</h2>
        <PostCard />
      </div>

      <Login />


      <div id="tweetModal" class="modal">


        <div class="modal-content">
          <span onClick={deletePostView} className="close">&times;</span>
          <TweetModal />
        </div>

      </div>

    </div>
  );
}



function deletePostView() {
  let txtarea = document.getElementById('tweetinput');
  txtarea.value = ""
  var modal = document.getElementById("tweetModal");
  modal.style.display = "none"

}








export default App;
