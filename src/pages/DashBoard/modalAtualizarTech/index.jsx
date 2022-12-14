import * as yup from 'yup';
import { useState, useEffect, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../api/api';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { StyleComponentModal, StyleModalBox } from '../modal/style';
import { formSchema } from '../../../services/valid/upDataTech';
import { TechContext } from '../../../contexts/TechContext';

export const ModalAtualizarTech = ({id}) => {
    
    const {oiTechs, setuserLogged, userLogged, settechs, techs, atual, setAtual, nomeTech, setNomeTech, setstatus, status, setCurrentModal, currentModal, setCurrentModalAtualizar, currentModalAtualizar, deleteTech, onSubmitFunctionUpDataTech} = useContext(TechContext)
    

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });


    return(
        <StyleComponentModal>
            <StyleModalBox>
                <button id={id} onClick={()=> setCurrentModalAtualizar(null)}>fechar</button>
                <div>
                    
                    <h5>Atualizar tecnologia</h5>
                    <p>{nomeTech}</p>
                    <form onSubmit={handleSubmit(onSubmitFunctionUpDataTech)}>

                        <select {...register("status")}>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>
                        {errors.status && <p>{errors.status.message}</p>}

                        <button  type='submit'>Salvar Atualizações</button>
                    </form>    
                </div>    
        </StyleModalBox>
        </StyleComponentModal>
    )
}