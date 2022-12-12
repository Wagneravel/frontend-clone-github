import React, { useEffect } from "react";
import Logo from '../../Logo.png';
import { StyleComponentModal, StyleModalBox } from "./style";

export const ModalVer = ({setCurrentModal, currentModal}) => {


    useEffect(()=>{
        console.log("montou")

        return () => {
            console.log("desmontou")
        }
    },[])



    return(
        <StyleComponentModal>

                <StyleModalBox>
                        <button onClick={()=> setCurrentModal(null)}>fechar</button>

                        <div>
                            <h1>nome</h1>
                            <p>numero</p>
                            <img src={Logo} alt="Logo"  />
                        </div>

                </StyleModalBox>

        </StyleComponentModal>
        

    )
}