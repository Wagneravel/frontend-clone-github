import styled from "styled-components";

export const StyleComponentModal = styled.div`

    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    z-index: 99;

    background: rgba(0,0,0,.25);



`

export const StyleModalBox = styled.div`

    background-color: blue;
    padding: 30px;
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid white;


`