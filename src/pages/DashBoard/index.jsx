import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import Logo from '../../Logo.png'
import { Container } from './style';
import { ListProduct } from './BodyDashBoard';



export const DashBoard = () => {

    const [userLogged, setuserLogged]= useState("")

    const navegate = useNavigate()  
    const logOut = () =>{

        localStorage.clear()
        setuserLogged("")
        navegate("/")

    }
    
    
    const tokenLS = localStorage.getItem("tokenUser")
    const tokenID = localStorage.getItem("IdUser")
 

    useEffect(() => {
    api
        .get("/profile", {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
          }})

        .then((response) => {

            setuserLogged(response.data)

            
        })
    }, []);

    console.log(userLogged)

    return (

        <Container>
            
            <header>
                <img  src={Logo} alt='logo' />
                <button onClick={logOut} type="button">Sair</button>
            </header>

            <section>
                <h3>Olá, {userLogged.name}</h3>
                
                <h3>{userLogged.course_module}</h3>
            </section>

            <ListProduct />

        </Container>


    )
}