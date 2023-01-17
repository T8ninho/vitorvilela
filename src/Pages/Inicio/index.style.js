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
        border-bottom-style: dotted;
        border-color: #fff;
    }
    .UltimosTrabContainer {
        background-color: ${Theme.colors.quintenary};
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .UltimosTrabContainer .subContTrab {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 70%;
    }
    .UltimosTrabContainer .subContTrab h1 {
        text-align: center;
        width: 100%;
        color: #fff;
        border-bottom-style: double;
        border-color: #fff;
    }

    .UltimosTrabContainer .subContTrab ul {
        display: flex;
        padding: 0;
        align-items: center;
    }
    .UltimosTrabContainer .subContTrab ul li {
        list-style: none;
        padding: 10px;
    }
    .UltimosTrabContainer .subContTrab ul li img {
        width: calc(100%);
        display: block;
        border-radius: 7px;
        border-style: dotted;
        border-color: #fff;
    }

    @media(max-width:600px) {
        .UltimosTrabContainer .subContTrab ul {
            flex-direction: column;
        }
        .UltimosTrabContainer .subContTrab {
            max-width: 90%;
        }
    }
`;