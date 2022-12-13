import * as yup from 'yup';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import Logo from '../../Logo.png'
import { Container } from './style';
import { ListProduct } from './BodyDashBoard';
import { ModalShow } from './modal';
import { ModalAtualizarTech } from './modalAtualizarTech';
import { Link } from 'react-router-dom';
import { HeaderHome } from '../../componentes/Header';
import { ModalVer } from '../../componentes/modalVer';
import { UserContext } from '../../contexts/UserContext';
import { TechContext } from '../../contexts/TechContext';


export const DashBoard = () => {
    
    const [userLogged, setuserLogged]= useState({})
    const [techs, settechs] = useState([])
    const [status, setstatus] = useState("")
    const [currentModal, setCurrentModal] = useState(null)
    const [currentModalAtualizar, setCurrentModalAtualizar] = useState(null)
    const [atual, setAtual] = useState('')
    const [nomeTech, setNomeTech] = useState('')
    
    const {oiTechs} = useContext(TechContext)
    const {oiUser} = useContext(UserContext)

    const tokenID = localStorage.getItem("IdUser")
    

    const navegate = useNavigate()  

    const verfiToken = () => {
        const tokenLS = localStorage.getItem("tokenUser")
        
    }


    useEffect(() => {
        const tokenLS = localStorage.getItem("tokenUser")  
        if(!tokenLS){
        //     console.log("tokenLS existe")
        // }else{
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

    oiTechs('testando o context')
    oiUser('testando o context')

    return (

        <Container>
            
             <HeaderHome setuserLogged={setuserLogged}   nome="Sair" /> 

            <section>
                <h3>Olá, {userLogged.name}</h3>
                
                <h5>{userLogged.course_module}</h5>
            </section>

            <ListProduct setNomeTech={setNomeTech} nomeTech={nomeTech} atual={atual} setAtual={setAtual} setCurrentModalAtualizar={setCurrentModalAtualizar} currentModalAtualizar={currentModalAtualizar} setCurrentModal={setCurrentModal} ModalAtualizarTech={ModalAtualizarTech} setstatus={setstatus} status={status} settechs={settechs} techs={techs} userLogged={userLogged}/>


            {/* <ModalVer currentModal={currentModal} setCurrentModal={setCurrentModal} /> */}

            {/* <ModalShow setCurrentModal={setCurrentModal} currentModal={currentModal} techs={techs} settechs={settechs} userLogged={userLogged} setuserLogged={setuserLogged}/> */}
            {
                currentModal && (
                    <ModalShow setCurrentModal={setCurrentModal} currentModal={currentModal} techs={techs} settechs={settechs} userLogged={userLogged} setuserLogged={setuserLogged}/>
                    )
                    
                
            }

            {/* {
                currentModalAtualizar && (
                 <ModalAtualizarTech setCurrentModalAtualizar={setCurrentModalAtualizar} currentModalAtualizar={currentModalAtualizar} settechs={settechs} techs={techs} userLogged={userLogged}  id={element.id}/> 
                )

            } */}
        </Container>
    )
}