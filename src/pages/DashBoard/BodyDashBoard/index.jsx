import { useContext, useState } from 'react';
import { DivCardLi, DivCardUl, DivHeaderList } from './style';
import { TechContext } from '../../../contexts/TechContext';

export function ListProduct({ModalAtualizarTech}){

    const {oiTechs, setuserLogged, userLogged, settechs, techs, atual, setAtual, nomeTech, setNomeTech, setstatus, status, setCurrentModal, currentModal, setCurrentModalAtualizar, currentModalAtualizar, deleteTech} = useContext(TechContext)

    function openModal(){
        console.log("Abrir modal")
        setCurrentModal(1)
    }

    function openModalAtualizar(e){
        setCurrentModalAtualizar(2)
        
        setAtual(e.target.id)
        setNomeTech(e.target.title)
    }

    return(
        <div >
            <div >

                <DivHeaderList>
                    <h1>Tecnologias</h1>
                    <button onClick={openModal} type="button"> + </button>
                </DivHeaderList>
                <DivCardUl>
                    { techs?.map((element, id, index) => (
                    
                        <DivCardLi key={element.id}  >
                            <div >
                            
                                <div>
                                    <button id={element.id} title={element.title} onClick={openModalAtualizar}>atualizar</button>
                                    <h3>{element.title}</h3>
                                    <h5>{element.status}</h5>
                                </div>
                                <button id={element.id} onClick={deleteTech} type='button'>deletar</button>
                            </div>
                        </DivCardLi>
                        ))
                    }
                    {
                        currentModalAtualizar && (
                        <ModalAtualizarTech /> 
                        )
                    }
                </DivCardUl>
            </div>
        </div>
    )
}

