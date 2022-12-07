import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import Logo from '../../Logo.png'
import { Container } from './style';



export const DashBoard = () => {

    const[{Nome, setNome}] = useState("")
    const[{Nivel, setNivel}] = useState("")

    const navegate = useNavigate()  
    const logOut = () =>{

        
        localStorage.removeItem("IdUser")
        localStorage.removeItem("tokenUser")
        navegate("/")

    }
    
    
    const tokenLS = localStorage.getItem("tokenUser")
    const tokenID = localStorage.getItem("IdUser")
    const nome = localStorage.getItem("Nome")
    const nivel = localStorage.getItem("Nivel")
    console.log(tokenLS)
    console.log(tokenID)

    useEffect(() => {
    api
        .get("/profile", {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
          }})

        .then((response) => {

            const usuarioLogado =  response.data

            console.log(usuarioLogado)
           
            let Nome = usuarioLogado.name
            console.log(Nome)
            let Nivel = usuarioLogado.course_module
            console.log(Nivel)
        })
    });

    

    return (

        <Container>
            
            <header>
                <img  src={Logo} alt='logo' />
                <button onClick={logOut} type="button">Sair</button>
            </header>

            <section>
                <h3>Olá, {nome}</h3>
                
                <h3>{nivel}</h3>
            </section>

        </Container>


    )
}