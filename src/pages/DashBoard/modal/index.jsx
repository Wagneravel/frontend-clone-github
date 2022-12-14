import * as yup from 'yup';
import { useState, useEffect, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../api/api';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { StyleComponentModal, StyleModalBox } from './style';
import { formSchema } from '../../../services/valid/addTechNew';
import { TechContext } from '../../../contexts/TechContext';


export const ModalShow = () => {

    const {oiTechs, setuserLogged, userLogged, settechs, techs, atual, setAtual, nomeTech, setNomeTech, setstatus, status, setCurrentModal, currentModal, setCurrentModalAtualizar, currentModalAtualizar, deleteTech, onSubmitFunction3} = useContext(TechContext)


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    return(
        <StyleComponentModal>

            <StyleModalBox>
                <button onClick={()=> setCurrentModal(null)}>fechar</button>
                <div>
                    
                    <h5>Cadastrar tecnologia</h5>
                    <form onSubmit={handleSubmit(onSubmitFunction3)}>
                        <input name='title' type="title"  placeholder='insira o nome da tecno' {...register("title")}></input>
                        {errors.title && <p>{errors.title.message}</p>}

                        <select {...register("status")}>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>
                        {errors.status && <p>{errors.status.message}</p>}
                        <button type='submit'>add tecnologia</button>
                    </form>    
                </div>    
            </StyleModalBox>

        </StyleComponentModal>
    )
}