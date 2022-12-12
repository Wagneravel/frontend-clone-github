import { useState } from 'react';
import { DivCardLi, DivCardUl, DivHeaderList } from './style';
import { api } from '../../../api/api';
import toast from 'react-hot-toast';


export function ListProduct({setAtual, atual, setCurrentModalAtualizar, currentModalAtualizar, userLogged, techs, settechs, ModalAtualizarTech, setstatus, status, setCurrentModal}){
    const tokenLS = localStorage.getItem("tokenUser")
    
    


    function openModal(){
        console.log("Abrir modal")
        setCurrentModal(1)
    }

    function openModalAtualizar(e){
        setCurrentModalAtualizar(2)
        
        setAtual(e.target.id)
    }

    function deleteTech(e){
        
        const tech_id = e.target.id

        api
        .delete(`/users/techs/${tech_id}`, {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
        }})
        
        .then((response) => {
            
            console.log(response)
            
            toast.success("tecno Deletada com sucesso")
        })
        .catch((err) => {
            console.log(err)
            toast.error("tecno nao Deletada corretamente")
        })

        const arrayFiltered = techs.filter(
            (product)=>product.id !== e.target.id
        )
        settechs(arrayFiltered)
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
                                    <button id={element.id} onClick={openModalAtualizar}>atualizar</button>
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
                        <ModalAtualizarTech setAtual={setAtual} atual={atual} setCurrentModalAtualizar={setCurrentModalAtualizar} currentModalAtualizar={currentModalAtualizar} settechs={settechs} techs={techs} userLogged={userLogged}  /> 
                        )
                    }
                </DivCardUl>
            </div>
        </div>
    )
}

// id={element.id}