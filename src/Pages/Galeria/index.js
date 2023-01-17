import React from "react";
import Appbar from "../../Components/AppBar";
import * as C from './index.style';

export default function Galeria() {
    return(
        <C.Container>
            <div id="BG">
                <Appbar Galeria={true}/>
            </div>
        </C.Container>
    )
}