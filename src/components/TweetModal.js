import React,{ Component, useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig'
import '../App.css';


const TweetModal = () =>{

    
        const [count, setCount] = useState(0);
        const [txtLenght, setTxtLenght] = useState(0);



        function modificarContador() {
            if (count <= 300){
                let txtarea = document.getElementById('tweetinput');
                console.log(txtarea.value.length)

                /*console.log(count)*/

                
                if (count <=299){
                    setCount(txtarea.value.length)
                }else{
                    
                    while (txtarea.value.length > 300){
                        txtarea.value = txtarea.value.slice(0, -1)

                    }
                    setCount(txtarea.value.length)

                }
                


            } 

        }
        


        useEffect(() => {
            let txtarea = document.getElementById('tweetinput');
            txtarea.setAttribute('onpaste','return false;');
            
        })
        
        return(
            <form className='tweetform'>
                <textarea  id='tweetinput'onInput={modificarContador} placeholder='Que piensas?' required ></textarea>
                <br></br>
                <br></br>
                <a onClick={postear} id='btntweet' class="btn btn-primary" value="Tweetear" readOnly >Tweetear</a>
                <p className='TweetContador'>{count}/300</p>
            </form>       

         )
    
}

async function postear(){

    try {
        const docRef = await addDoc(collection(db, "post"), {
          fecha: "Ada",
          img: "Lovelace",
          msn: 1815,
          tag: 1815,
          usuario: 1

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

function deletePostView(){
  var modal = document.getElementById("tweetModal");
  modal.style.display = "none"
  
}

export default TweetModal;