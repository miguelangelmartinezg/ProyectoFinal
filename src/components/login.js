import { documentId } from "firebase/firestore";
import React, { Component } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig'

import '../css/login.css'
import '../css/postcard.css';

class login extends React.Component {

    render() {
        async function loadUser() {
            let AID = localStorage.getItem('AID');

            if (AID !== "" && AID !== null) {
                //console.log(AID)
                const query = await getDocs(collection(db, 'usuarios'));
                query.forEach((documento) => {

                    if (documento.data().tag === AID) {
                        logon(documento.data())
                        //console.log(documento.data())
                    }
                })
            }

        }

        loadUser()

        return (
            <div>
                <div className="cLogin">
                    <h2>Inicie Seccion</h2>
                    <form>
                        <div class="form-group">
                            <label>User Tag</label>
                            <input class="form-control" placeholder="Digita Tu Tag(@)" id="loginTag" required />
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control" placeholder="Digita Tu Contraseña" id="loginPass" required />
                        </div>
                        <br></br>
                        <a onClick={validate} class="btn btn-primary" value="Login" readOnly >Login </a>
                    </form>
                </div>

                <div className="cUser">

                </div>
            </div>

        );
    }

}

async function validate() {
    let loginTag = "@" + document.getElementById('loginTag').value;
    let loginPass = document.getElementById('loginPass').value;

    console.log(loginTag + loginPass)
    if (loginTag !== "" && loginTag != null && loginPass !== "" && loginPass != null) {
        const query = await getDocs(collection(db, 'usuarios'));
        query.forEach((documento) => {
            //console.log(documento.data().tag)
            if (documento.data().tag === loginTag && documento.data().pass === loginPass) {
                console.log("you did it")

                var homeElemt = document.querySelector(".cLogin");
                homeElemt.setAttribute('class', 'hide')



                let element2 = document.createElement('div')
                element2.setAttribute('class', 'login-rightInfo')

                let img = document.createElement('img')
                img.setAttribute('class', 'login-user-icon')
                img.setAttribute('src', documento.data().img)

                let p = document.createElement('p')
                p.setAttribute('class', 'login-user-name')
                p.innerText = documento.data().nombre

                let p2 = document.createElement('p')
                p2.setAttribute('class', 'login-user-tag')
                p2.innerText = documento.data().tag

                let a = document.createElement('a')
                a.setAttribute('class', 'btn btn-primary')
                a.addEventListener("click", logout);

                a.innerText = "Salir"

                element2.appendChild(img);
                element2.appendChild(p);
                element2.appendChild(p2);
                element2.appendChild(a);

                var homeElemt = document.querySelector(".cUser");
                homeElemt.appendChild(element2)

                var hidetweet = document.querySelector(".hidetweet");
                hidetweet.setAttribute("class", "btn btn-primary Tw-btn")


                localStorage.setItem('AID', documento.data().tag);


            }

        })

    } else {
        alert("Faltan Datos para poder Ingresar");
    }


}

function logout() {
    localStorage.removeItem('AID');
    console.log("saliste")
    var cLogin = document.querySelector(".hide");
    var cUser = document.querySelector(".login-rightInfo");
    var hidetweet = document.querySelector(".Tw-btn");


    var loginTag = document.querySelector("#loginTag");
    var loginPass = document.querySelector("#loginPass");
    hidetweet.setAttribute("class", "hidetweet")


    loginTag.value = ""
    loginPass.value = ""

    cLogin.setAttribute('class', 'cLogin')
    cUser.remove()


}

function logon(doc) {
    var homeElemt = document.querySelector(".cLogin");
    homeElemt.setAttribute('class', 'hide')



    let element2 = document.createElement('div')
    element2.setAttribute('class', 'login-rightInfo')

    let img = document.createElement('img')
    img.setAttribute('class', 'login-user-icon')
    img.setAttribute('src', doc.img)

    let p = document.createElement('p')
    p.setAttribute('class', 'login-user-name')
    p.innerText = doc.nombre

    let p2 = document.createElement('p')
    p2.setAttribute('class', 'login-user-tag')
    p2.innerText = doc.tag

    let a = document.createElement('a')
    a.setAttribute('class', 'btn btn-primary')
    a.addEventListener("click", logout);

    a.innerText = "Salir"

    element2.appendChild(img);
    element2.appendChild(p);
    element2.appendChild(p2);
    element2.appendChild(a);

    var homeElemt = document.querySelector(".cUser");
    homeElemt.appendChild(element2)
}


function firsttime() {

}

export default login