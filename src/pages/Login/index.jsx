import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Container } from './style';
import Logo from '../../Logo.png';
import { UserContext } from '../../contexts/UserContext';
import { formSchema } from '../../services/valid/loginSchema';



const Logando = () => {
    const {onSubmitFunction, oiUser, Loading} = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });


    return(

        <Container>
            <img alt='Logo' src={Logo} />
            <h3>Login</h3>
            <form className='form' onSubmit={handleSubmit(onSubmitFunction)} >

                <p>Email</p>
                <input name='Email' type='email' placeholder='Insira seu email' {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
                <p>password</p>
                <input name='Password' type="password" placeholder='Insira sua senha' {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}

                <button type='submit'>{Loading? 'Logando' : 'Entrar'}</button>
            </form>
            <h5>Ainda não possui cadastro?</h5>
            <Link  to='/register' >Cadastre-se</Link>
        </Container>
    )

};

export default Logando;

