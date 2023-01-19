import React from 'react'
import * as C from './index.style'

export default function Appbar(props) {



    return(
       <C.Container>
        <div class="top">
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
                        <li>{props.Inicio === true ?
                            <a href="/" className="linkActived">Início</a> :
                            <a href="/" className="link">Início</a>
                            }
                        </li>
                        <li>{props.Galeria === true ?
                            <a href="galeria" className="linkActived">Galeria</a> :
                            <a href="galeria" className="link">Galeria</a>
                            }
                        </li>
                        <li>{props.Contatos === true ?
                            <a href="contatos" className="linkActived">Contatos</a> :
                            <a href="contatos" className="link">Contatos</a>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       </C.Container>
    )
}