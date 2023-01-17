import React from "react";
import Appbar from "../../Components/AppBar";
import * as C from './index.style';

export default function Contatos() {
    return(
        <C.Container>
            <div id="BG">
                <Appbar Contatos={true}/>
            </div>
        </C.Container>
    )
}