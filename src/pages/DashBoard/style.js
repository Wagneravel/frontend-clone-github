import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    background-color: black;
    color: white;


    && > header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 70px;
            padding: 20px;
            box-sizing: border-box;
            border-bottom: 1px solid grey;

            button{
                width: 100px;
                border: 1px solid white;
                background-color: #3b3b3c;
                padding: 5px;
                color: white;

            }
    }

    && > section{
        background-color: #3b3b3c;
        padding: 20px;
        
        @media screen and (min-width: 600px) {
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    

    } 

    }


`


