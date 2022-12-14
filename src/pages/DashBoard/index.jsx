// import * as yup from 'yup';
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

    const {setuserLogged, userLogged, settechs, techs, atual, setAtual, nomeTech, setNomeTech, setstatus, status, setCurrentModal, currentModal, setCurrentModalAtualizar, currentModalAtualizar} = useContext(TechContext);
    
   
    
    return (

        <Container>
            
             <HeaderHome setuserLogged={setuserLogged}   nome="Sair" /> 

            <section>
                <h3>Olá, {userLogged.name}</h3>
                
                <h5>{userLogged.course_module}</h5>
            </section>

            <ListProduct ModalAtualizarTech={ModalAtualizarTech}/>

            {
                currentModal && (
                    <ModalShow />
                )
            }
            
        </Container>
    )
}