import { useState } from 'react';
import { DivHeaderList } from './style';
import { api } from '../../../api/api';
import toast from 'react-hot-toast';


export function ListProduct({userLogged, techs, settechs, ModalAtualizarTech, setstatus, status}){
    const tokenLS = localStorage.getItem("tokenUser")
    
    function openModal(){
        console.log("Abrir modal")
        
    }

    function deleteTech(e){
        console.log(e.target.id)
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
                <ul>
                    
               { techs?.map((element, id) => (
                
                    <li key={element.id}>
                        <div >
                            <div>
                                <h3>{element.title}</h3>
                                <h5>{element.status}</h5>
                            </div>
                            <button id={element.id} onClick={deleteTech} type='button'>deletar</button>
                        </div>
                        <ModalAtualizarTech setstatus={setstatus} status={status} settechs={settechs} techs={techs} id={element.id}/>
                    </li>
                ))
                }
                </ul>
            </div>
        </div>
    )

}