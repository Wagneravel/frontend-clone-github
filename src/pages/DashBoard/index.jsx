import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import Logo from '../../Logo.png'
import { Container } from './style';
import { ListProduct } from './BodyDashBoard';
import { ModalShow } from './modal';
import { ModalAtualizarTech } from './modalAtualizarTech';
import { Link } from 'react-router-dom';
import { HeaderHome } from '../../componentes/Header';


export const DashBoard = () => {
    
    const [userLogged, setuserLogged]= useState({})
    const[techs, settechs] = useState([])
    const[status, setstatus] = useState("")
    
    const tokenID = localStorage.getItem("IdUser")
    

    const navegate = useNavigate()  

    const verfiToken = () => {
        const tokenLS = localStorage.getItem("tokenUser")
        
    }

    
    const logOut = () =>{

        localStorage.clear()
        setuserLogged("")
        navegate("/")

    }
    
    

    useEffect(() => {
        const tokenLS = localStorage.getItem("tokenUser")  
        if(tokenLS){
            console.log("tokenLS existe")
        }else{
            navegate("/")
        }  
    api
    
        .get("/profile", {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
          }})

        .then((response) => {

            setuserLogged(response.data)
            settechs(response.data.techs)
            
        })
    }, []);

    console.log(userLogged)

    return (

        <Container>
            
            <header>
                <img  src={Logo} alt='logo' />
                <Link onClick={logOut} to="/" >Sair </Link>
            </header>

            {/* <HeaderHome /> */}

            <section>
                <h3>Olá, {userLogged.name}</h3>
                
                <h5>{userLogged.course_module}</h5>
            </section>

            <ListProduct ModalAtualizarTech={ModalAtualizarTech} setstatus={setstatus} status={status} settechs={settechs} techs={techs} userLogged={userLogged}/>

            <ModalShow techs={techs} settechs={settechs} userLogged={userLogged} setuserLogged={setuserLogged}/>

            {/* <ModalAtualizarTech settechs={settechs} techs={techs} userLogged={userLogged}/> */}

        </Container>
    )
}