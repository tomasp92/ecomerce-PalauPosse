import { useState } from 'react'
import { createContext } from "react";



const CustomProvider = ({children})=>{
    const contexto = createContext()
    const [misDatos, setMisDatos] = useState('mis datos')

    const addItem = ()=>{

    }

    return(
        <Provider>
        </Provider>
        )
}

export default CustomProvider