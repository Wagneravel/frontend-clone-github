import * as yup from 'yup';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Container } from './style';
import Logo from '../../Logo.png';



const Logando = ({setUser}) => {
    const [Loading, setLoading] = useState(false);

    const formSchema = yup.object().shape({

        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo obrigatório'),
        
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const navegate = useNavigate() ; 
    const onSubmitFunction = (data) => {
        

        api
        .post('/sessions', data)
        .then((response) => {
            
            setLoading(true);
            setUser(response.data.user);
            localStorage.setItem('tokenUser' ,response.data.token);
            localStorage.setItem('IdUser',response.data.user.id);
        
            toast.success('login com sucesso');
            setTimeout(()=>{
                navegate('/dashboard');
            },500)
            
        })
        .catch((err) => {
            
            toast.error('email ou senha incorreta');
        })
        .finally(
            setTimeout(()=>{
                setLoading(false);
            },800)
        )
    };  

    

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

