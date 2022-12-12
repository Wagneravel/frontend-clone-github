import styled from "styled-components";

export const ContainerRegister = styled.div`

    width: 100vw;
    min-height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    box-sizing: border-box;

    && > p{
        margin: 0;
        margin-bottom: 20px;
        font-size: smaller;
    }

    && > form{
        
        width: 100%;
        max-width: 360px;
        display: flex;
        flex-direction: column;

        

        input{
            height: 40px;
            margin-bottom: 15px;
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
            background-color: red;
            border: none;
            color: white;
            border-radius: 6px;
            margin-top: 30px;
        }

        select{
            height: 40px;
            color: white;
            background-color: #464646;
            border-radius: 6px;
            border: 1px solid white;
            padding: 10px;


            
        }
    }

`