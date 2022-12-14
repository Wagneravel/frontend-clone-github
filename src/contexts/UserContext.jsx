import { createContext } from "react"; 
import { api } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';




export const UserContext = createContext({});

export const UserProvider = ({children}) => {

    const [User, setUser] = useState(null)
    const [Loading, setLoading] = useState(false);

    function oiUser(xxx){
        console.log(`oi User ${xxx}`)

        
    }
    const navegate = useNavigate() ; 
    const onSubmitFunctionLogin = (data) => {
        

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

    const onSubmitFunctionRegister = (data) => {

        api
        .post('/users', data)
        .then((response) => {
            
            setLoading(true);
            toast.success('Cadastro realizado com sucesso');
            setTimeout(()=>{
                navegate('/');
            },500)
        })
        .catch((err) => {
           
            toast.error('Cadastro não permitido');
        })
        .finally(
            setTimeout(()=>{
                setLoading(false);
            },800)
        );

    }; 

    return(

        <UserContext.Provider value={{oiUser, onSubmitFunctionLogin, Loading, setLoading, User, setUser, onSubmitFunctionRegister}}>
            {children}
        </UserContext.Provider>

    )


};
