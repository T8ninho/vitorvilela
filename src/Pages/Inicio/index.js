import React from "react";
import Appbar from "../../Components/AppBar";
import * as C from './index.style';

export default function Inicio() {
    return(
        <C.Container>
            <div id="BG">
                <Appbar Inicio={true}/>
            </div>
            <div className="UltimosTrabContainer">
                <div className="subContTrab">
                    <h1>Ultimos Trabalhos</h1>
                    <ul>
                        <li>
                            <img alt='Imagem Destaque' src="https://firebasestorage.googleapis.com/v0/b/vrvitorvilela.appspot.com/o/01UltTrab.jfif?alt=media&token=e37ee060-7668-40a9-84fd-8327bfec4819" />
                        </li>
                        <li>
                            <img alt='Imagem Destaque' src="https://firebasestorage.googleapis.com/v0/b/vrvitorvilela.appspot.com/o/02UltTrab.jfif?alt=media&token=4ce5e9d1-a4ed-4e24-acc8-22323b7d78d1" />
                        </li>
                        <li>
                            <img alt='Imagem Destaque' src="https://firebasestorage.googleapis.com/v0/b/vrvitorvilela.appspot.com/o/03UltTrab.jfif?alt=media&token=566b8da0-95e9-4838-b1ac-73b6c2d4c58e" />
                        </li>
                        
                    </ul>
                </div>
            </div>
        </C.Container>
    )
}