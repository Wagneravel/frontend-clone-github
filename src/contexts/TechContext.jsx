import { createContext } from "react"; 

export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    function oiTechs(xxx){
        console.log(`oi Techs ${xxx}`)
    }
    return(

        <TechContext.Provider value={{oiTechs}}>
            {children}
        </TechContext.Provider>

    )


}
