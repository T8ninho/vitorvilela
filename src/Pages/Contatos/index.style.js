import styled from "styled-components";
import Theme from "../../Themes";

export const Container = styled.div`
    background-color: ${Theme.colors.tertiary};

    #BG {
        background-image: url(https://firebasestorage.googleapis.com/v0/b/vrvitorvilela.appspot.com/o/Background.jpg?alt=media&token=c09a3f28-6c41-4b81-aa65-4440ec5705c2);
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        height:70vh;
        display: flex;
        flex-direction: column;
        border-bottom-style: dotted;
        border-color: #fff;
    }
`;