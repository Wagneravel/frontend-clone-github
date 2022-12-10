import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../api/api';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

export const ModalAtualizarTech = ({settechs, techs, id, setstatus, status}) => {

    console.log(techs)
    const [Loading, setLoading] = useState(false)

    const formSchema = yup.object().shape({

        status: yup.string().required("Campo obrigatório"),
        
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });
    const tokenLS = localStorage.getItem("tokenUser")
    
    const onSubmitFunction = (data) => {
        
        console.log(data)

        api
        .put(`/users/techs/${id}`, data, {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
        }})
        
        .then((response) => {
            
            let newTechsList = techs.filter((ele)=> ele.id !== id)

            newTechsList.push(response.data)

            settechs(newTechsList)

            console.log(response)
            
            toast.success("tecno Atualizada com sucesso")
        })

        .catch((err) => {
            console.log(err)
            toast.error("tecno nao foi atualizada corretamente")
        })
    } 

    return(
        <div>
            <h1>Atualizar tecnologia</h1>
            <form onSubmit={handleSubmit(onSubmitFunction)}>

                <select {...register("status")}>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                </select>
                {errors.status && <p>{errors.status.message}</p>}

                <button id={id} type='submit'>Salvar Atualizações</button>
            </form>    
        </div>    
    )
}