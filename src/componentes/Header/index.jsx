import Logo from '../../Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { StyleComponentHeader } from './style';
import { useState } from 'react';




export function HeaderHome(props){
    const tokenSL = localStorage.getItem("tokenUser")
    const navegate = useNavigate()

    const logOut = () =>{
        if(tokenSL){
        localStorage.clear()
        props.setuserLogged("")
        }
        navegate("/")

    }

    return(

        <StyleComponentHeader >
                <img  src={Logo} alt='logo' />
                <Link  onClick={logOut} to="/"> {props.nome} </Link>
        </StyleComponentHeader>

    )
}