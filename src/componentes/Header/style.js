import styled from "styled-components";

export const StyleComponentHeader = styled.div`


    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 20px;
    box-sizing: border-box;

    && > a{
        list-style: none;
        border: 1px solid white;
        color: white;
        padding: 5px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
    }

`