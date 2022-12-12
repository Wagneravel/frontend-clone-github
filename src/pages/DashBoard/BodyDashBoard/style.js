import styled from "styled-components";

export const DivHeaderList = styled.div`

    display: flex;
    width: 100%;
    
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid white;
    margin-top: 10px;

    && > h1{
        font-size: 22px;
    }

`


export const DivCardUl = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;

`

export const DivCardLi = styled.li`

    background-color: cadetblue;
    
    
    box-sizing: border-box;
    

    && > div{
    
        background-color: cadetblue;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        width: 100%;

    }

`