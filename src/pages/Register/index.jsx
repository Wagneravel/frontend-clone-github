import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { ContainerRegister } from './style';
import Logo from '../../Logo.png';
import { HeaderHome } from '../../componentes/Header';
import { formSchema } from '../../services/valid/registerSchema';
import { UserContext } from '../../contexts/UserContext';

const Registrando= ()=> {

    const {onSubmitFunctionRegister, oiUser, Loading} = useContext(UserContext)
    

    const arrSelect = ['Primeiro módulo (Introdução ao Frontend)', 'Segundo módulo (Frontend Avançado)', 'Terceiro módulo (Introdução ao Backend)', 'Quarto módulo (Backend Avançado)'];


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    return(
        <ContainerRegister>
            
            <HeaderHome nome='Voltar' />

            <h3>Crie sua conta</h3>
            <p>Rapido e grátis, vamos nessa</p>
            
            <form className='form' onSubmit={handleSubmit(onSubmitFunctionRegister)} >
                <p>Nome</p>
                <input type='text' placeholder='Nome' {...register('name')}  />
                {errors.name && <p>{errors.name.message}</p>}

                <p>Email</p>
                <input type='email' placeholder='Email' {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}

                <p>Senha</p>
                <input type='password' placeholder='senha' {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}

                <p>Confime sua senha</p>
                <input type='password' placeholder='confirmação senha' {...register('passwordConfirm')} />
                {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

                <p>Bio</p>
                <input type='text' placeholder='conte mais sobre vc...' {...register('bio')} />
                {errors.bio && <p>{errors.bio.message}</p>}

                <p>Contato</p>
                <input type='text' placeholder='contact' {...register('contact')} />
                {errors.contact && <p>{errors.contact.message}</p>}

                <p>Qual é seu nível?</p>
                <select {...register('course_module')}>
                        {
                            arrSelect.map((elemento, index)=>{
                                return <option key={index} value={elemento}>{elemento}</option>
                            })
                        }
                </select>
                {errors.course_module && <p>{errors.course_module.message}</p>}

                <button type='submit'>Enviar!</button>
            </form>
       </ContainerRegister>
    )
};
export default Registrando;