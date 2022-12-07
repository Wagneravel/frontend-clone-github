import * as yup from 'yup';
import { set, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Container } from './style';
import Logo from '../../Logo.png'



const Logando = ({setUser}) => {
    const [Loading, setLoading] = useState(false)

    const formSchema = yup.object().shape({

        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Campo obrigatório"),
        
      })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
      });

    const navegate = useNavigate()  
    const onSubmitFunction = (data) => {
        console.log(data)

        api
        .post("/sessions", data)
        .then((response) => {
            console.log(response.data)
            setLoading(true)
            setUser(response.data.user)
            localStorage.setItem("tokenUser" ,response.data.token)
            localStorage.setItem("IdUser",response.data.user.id)
            localStorage.setItem("Nome",response.data.user.name)
            localStorage.setItem("Nivel",response.data.user.course_module)
            toast.success("login com sucesso")
            setTimeout(()=>{
                navegate("/dashboard")
            },500)
            
        })
        .catch((err) => {
            console.log(err)
            toast.error("login não permitido")
        })
        .finally(
            setTimeout(()=>{
                setLoading(false)
            },800)
        )
    }  

    const GoRegister= () => {
        setTimeout(()=>{
            navegate("/register")
        },300)
    }

    return(

        <Container>
            <img alt='Logo' src={Logo} />
            <h3>Login</h3>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)} >

                <p>Email</p>
                <input name='Email' type="email" placeholder="Insira seu email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
                <p>password</p>
                <input name='Password' type="password" placeholder="Insira sua senha" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit">{Loading? "Logando" : "Entrar"}</button>
            </form>
            <h5>Ainda não possui cadastro?</h5>
            <button onClick={GoRegister} type='button'>Cadastre-se</button>
        </Container>
    )

}

export default Logando