import React from 'react'
import * as C from './index.style'

export default function Appbar(props) {



    return(
       <C.Container>
            <nav class="navbar container">
            <a href="/" class="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/vrvitorvilela.appspot.com/o/Logo.jpg?alt=media&token=8db64997-6fe9-4ab0-9e1c-15c61b51648b" alt="Logo"/>
            </a>
                <input type="checkbox" id="toggler" />
                <label for="toggler" class="burger">
                    <span class="bun bun--toptp"></span>
                    <span class="bun bun--top"></span>
                    <span class="bun bun--bottom"></span>
                </label>
            <div class="menu">
                <ul class="list">
                    <li><a href="/" className="link"  style={props.Inicio === true ? {color: "#000"} : {color: "#fff"}} >Início</a></li>
                    <li><a href="galeria" className="link" style={props.Galeria === true ? {color: "#000"} : {color: "#fff"}} >Galeria</a></li>
                    <li><a href="contatos" className="link" style={props.Contatos === true ? {color: "#000"} : {color: "#fff"}} >Contatos</a></li>
                </ul>
            </div>
        </nav>
       </C.Container>
    )
}