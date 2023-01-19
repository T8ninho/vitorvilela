import styled from "styled-components";
import Theme from "../../Themes";

export const Container = styled.div`
    #BG {
        background-image: url(https://firebasestorage.googleapis.com/v0/b/vrvitorvilela.appspot.com/o/Background.jpg?alt=media&token=c09a3f28-6c41-4b81-aa65-4440ec5705c2);
        background-color: ${Theme.colors.tertiary};
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        height:70vh;
        display: flex;
        flex-direction: column;
        border-bottom-style: double;
        border-color: #fff;
    }
    @media(max-width:600px) {
        #BG {
            height: 40vh;
        }
    }
`;

export const UltimosTrabContainer = styled.div`
        background-color: ${Theme.colors.quintenary};
        align-items: center;
        justify-content: center;
        display: flex;
`
export const SubContTrab = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 70%;
    h1 {
        text-align: center;
        width: 100%;
        color: #fff;
        border-bottom-style: double;
        border-color: #fff;
    }

    ul {
        display: flex;
        padding: 0;
        align-items: center;
    }
    ul li {
        list-style: none;
        padding: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    img {
        width: 300px;
        height: 300px;
        border-radius: 7px;
        border-style: double;
        border-color: #fff;
        object-fit: cover;
        object-position: center;
        transition: 
        translate 0.25s,
        box-shadow 0.25s;
    }
    img:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    @media(max-width:600px) {
        max-width: 90%;
        ul {
            flex-direction: column;
        }
    }
`
export const TextoDescritivo = styled.div`
    border-top-style: double;
    border-color: #fff;
    background-color: ${Theme.colors.quintenary};
    width: 100%;
    text-align: justify;
    justify-content: center;
    display: flex;
`
export const ContTexto = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 70%;
    h1 {
        color: #fff;
        text-align: center;
    }
    p {
        color: #fff;
        width: 80%;
    }
`;