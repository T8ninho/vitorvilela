import styled from "styled-components";

export const Container = styled.div`
        
    display: flex;
    padding: 0;
    align-items: center;
    header {
        padding: 5px;
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
        max-width: 50%;
        flex-direction: column;
    img {
        width: calc(90vw / 2);
        height: calc(90vw / 2);
    }
    }
    
`;


