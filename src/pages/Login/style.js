import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    && > img{
        margin-top: 30px;
    }

    && > h3{
        font-size: 32px;
        font-weight: 800;
        margin-top: 80px;
        margin-bottom: 50px;

    }

    && > button{
        background-color: grey;
        color:white;
        width: 100%;
        max-width: 360px;
        border-radius: 6px;
        height: 40px;
        border: none;
    }

    && > form{
        
        width: 100%;
        max-width: 360px;
        display: flex;
        flex-direction: column;

        input{
            height: 40px;
            margin-bottom: 20px;
            border-radius: 6px;
            padding-left: 20px;
            background-color: #464646;
            color: white;
            border: 1px solid white;

        }
        p{
        font-size: smaller;
        margin: 0;
        margin-bottom: 5px;
        }
        button{
            height: 40px;
            background-color: green;
            border: none;
            color: white;
            border-radius: 6px;
            margin-top: 30px;
        }
    
        
    }



`