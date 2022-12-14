import { createContext } from "react"; 
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import toast from 'react-hot-toast';

export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    const [userLogged, setuserLogged]= useState({})
    const [techs, settechs] = useState([])
    const [status, setstatus] = useState("")
    const [currentModal, setCurrentModal] = useState(null)
    const [currentModalAtualizar, setCurrentModalAtualizar] = useState(null)
    const [atual, setAtual] = useState('')
    const [nomeTech, setNomeTech] = useState('')
    const [Loading, setLoading] = useState(false)

    const tokenLS = localStorage.getItem("tokenUser")

    function deleteTech(e){
        
        const tech_id = e.target.id

        api
        .delete(`/users/techs/${tech_id}`, {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
        }})
        
        .then((response) => {
            
            console.log(response)
            
            toast.success("tecno Deletada com sucesso")
        })
        .catch((err) => {
            console.log(err)
            toast.error("tecno nao Deletada corretamente")
        })

        const arrayFiltered = techs.filter(
            (product)=>product.id !== e.target.id
        )
        settechs(arrayFiltered)
    }


    const onSubmitFunction4 = (data) => {
        
        console.log(data)

        api
        .put(`/users/techs/${atual}`, data, {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
        }})
        
        .then((response) => {
            
            let newTechsList = techs.filter((ele)=> ele.id !== response.data.id)
            
            
            newTechsList.push(response.data)

            
            settechs(newTechsList)

            console.log(response)
            
            toast.success("tecno Atualizada com sucesso")
            setCurrentModalAtualizar(null)
        })

        .catch((err) => {
            console.log(err)
            toast.error("tecno nao foi atualizada corretamente")
        })
    } 


    const onSubmitFunction3 = (data) => {
        
        api
        .post("/users/techs", data, {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
          }})

        
        .then((response) => {
            
            
            setLoading(true)
            settechs([...techs, data])
            toast.success("tecno add com sucesso")
            setCurrentModal(null)
            
            
        })
        .catch((err) => {
           
            toast.error("tecno nao add corretamente")
        })
        .finally(
            setTimeout(()=>{
                setLoading(false)
            },800)
        )
    } 




    const tokenID = localStorage.getItem("IdUser")
    const navegate = useNavigate()  

    const verfiToken = () => {
        const tokenLS = localStorage.getItem("tokenUser")
        
    }


    useEffect(() => {
          
        if(!tokenLS){
        
            navegate("/")
        }  
    api
    
        .get("/profile", {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
          }})

        .then((response) => {

            setuserLogged(response.data)
            settechs(response.data.techs)
            
            
        })
        
    }, []);






    function oiTechs(xxx){
        console.log(`oi Techs ${xxx}`)
    }
    return(

        <TechContext.Provider value={
            {
                oiTechs,
                setuserLogged,
                userLogged,
                settechs,
                techs,
                setAtual,
                atual,
                setNomeTech,
                nomeTech,
                setstatus,
                status,
                setCurrentModal,
                currentModal,
                setCurrentModalAtualizar,
                currentModalAtualizar,
                deleteTech,
                onSubmitFunction3,
                onSubmitFunction4

            }}>
            {children}
        </TechContext.Provider>

    )


}
