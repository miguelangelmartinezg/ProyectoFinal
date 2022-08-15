import React, { Component } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig'

import '../css/postcard.css';


class PostCard extends React.Component {
  render() {

    obtenerpost()
    console.log("hola")

    return (

      <div className="shome">

      </div>
    );
  }

}

async function obtenerpost() {
  const query = await getDocs(collection(db, 'post'));
  console.log(query.size)

  query.forEach((documento) => {
    console.log(documento.data())

    let element = document.createElement('div')
    element.setAttribute('class', 'homeCard')
    let element2 = document.createElement('div')
    element2.setAttribute('class', 'homeCard-rightInfo')

    let img = document.createElement('img')
    img.setAttribute('class', 'homeCard-user-icon')
    img.setAttribute('src', documento.data().img)

    let p = document.createElement('p')
    p.setAttribute('class', 'homeCard-user-name')
    p.innerText = documento.data().usuario

    let p2 = document.createElement('p')
    p2.setAttribute('class', 'homeCard-user-tag')
    p2.innerText = documento.data().tag

    let p3 = document.createElement('p')
    p3.setAttribute('class', 'homeCard-user-date')
    p3.innerText = '. ' + documento.data().fecha

    let p4 = document.createElement('p')
    p4.setAttribute('class', 'homeCard-msn')
    p4.innerText = documento.data().texto


    element.appendChild(element2)
    element.appendChild(p4)

    element2.appendChild(img);
    element2.appendChild(p);
    element2.appendChild(p2);
    element2.appendChild(p3);







    var homeElemt = document.querySelector(".shome");
    homeElemt.appendChild(element)
    console.log(homeElemt);
  })
}

export default PostCard