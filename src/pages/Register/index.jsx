import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ContainerRegister } from './style';
import Logo from '../../Logo.png'
import { HeaderHome } from '../../componentes/Header';

const Registrando= ()=> {
    const [Loading, setLoading] = useState(false)

    const arrSelect = ["Primeiro módulo (Introdução ao Frontend)", "Segundo módulo (Frontend Avançado)", "Terceiro módulo (Introdução ao Backend)", "Quarto módulo (Backend Avançado)"];

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        name: yup.string().required("Nome obrigatório"),
        contact: yup.string().required("Contato obrigatório"),
        bio: yup.string().required("Campo obrigatório"),
        course_module: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(8, "A senha deve ter no minimo 8 caracteres").matches(/\W|_/,"Deve conter um caracter especial").matches(/[\d,]/, "Sua senha deve conter pelo menos 1 numero"),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], "Suas senhas não são iguais")
        
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const navegate = useNavigate() 
    const onSubmitFunction = (data) => {

        api
        .post("/users", data)
        .then((response) => {
            
            setLoading(true)
            toast.success("Cadastro realizado com sucesso")
            setTimeout(()=>{
                navegate("/")
            },500)
        })
        .catch((err) => {
           
            toast.error("Cadastro não permitido")
        })
        .finally(
            setTimeout(()=>{
                setLoading(false)
            },800)
        )

    }  
    

    return(
        <ContainerRegister>
            
            <HeaderHome nome="Voltar" />

            <h3>Crie sua conta</h3>
            <p>Rapido e grátis, vamos nessa</p>
            
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)} >
                <p>Nome</p>
                <input type="text" placeholder="Nome" {...register("name")}  />
                {errors.name && <p>{errors.name.message}</p>}

                <p>Email</p>
                <input type="email" placeholder="Email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}

                <p>Senha</p>
                <input type="password" placeholder="senha" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}

                <p>Confime sua senha</p>
                <input type="password" placeholder="confirmação senha" {...register("passwordConfirm")} />
                {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

                <p>Bio</p>
                <input type="text" placeholder="conte mais sobre vc..." {...register("bio")} />
                {errors.bio && <p>{errors.bio.message}</p>}

                <p>Contato</p>
                <input type="text" placeholder="contact" {...register("contact")} />
                {errors.contact && <p>{errors.contact.message}</p>}

                <p>Qual é seu nível?</p>
                <select {...register("course_module")}>
                        {
                            arrSelect.map((elemento, index)=>{
                                return <option key={index} value={elemento}>{elemento}</option>
                            })
                        
                        }
                </select>
                {errors.course_module && <p>{errors.course_module.message}</p>}

                <button type="submit">Enviar!</button>
            </form>
       </ContainerRegister>
    )
}


export default Registrando