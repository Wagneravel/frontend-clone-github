import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../api/api';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';


export const ModalShow = ({setuserLogged, userLogged, settechs, techs}) => {

    const [Loading, setLoading] = useState(false)

    const formSchema = yup.object().shape({

        title: yup.string().required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório"),
        
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });
    const tokenLS = localStorage.getItem("tokenUser")
    const onSubmitFunction = (data) => {
        
        console.log(data)

        api
        .post("/users/techs", data, {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
          }})

        
        .then((response) => {
            
            console.log(response)
            setLoading(true)
            settechs([...techs, data])
            toast.success("tecno add com sucesso")

            
            
        })
        .catch((err) => {
            console.log(err)
            toast.error("tecno nao add corretamente")
        })
        .finally(
            setTimeout(()=>{
                setLoading(false)
            },800)
        )
    } 

    return(
        <div>
            <h1>Cadastrar tecnologia</h1>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
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
    )
}