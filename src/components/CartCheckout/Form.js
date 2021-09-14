import { useState, useEffect } from 'react'
import Input from './Input'
import Button from 'react-bootstrap/Button'
import Loading from './../Loading'

const CustomForm = ({ onFormSubmit, loading })=>{
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [telefono, setTelefono] = useState('')
    const [disabled, setDisabled] = useState(true)
    
    useEffect(() => {
        if(telefono != '' & email != '' & email == email2 & nombre != ''){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }, [telefono, email, email2, nombre])

    return(
        <div className='form'>
            <Input setInputValue={ setNombre } controlId="nombre" type="Nombre" />
            <Input setInputValue={ setEmail } controlId="email" type="Email" />
            <Input setInputValue={ setEmail2 } controlId="email2" type="Confirm email" />
            <Input setInputValue={ setTelefono } controlId="phone" type="Telefono" />
            <Button variant="primary" type="submit" onClick={()=>onFormSubmit(telefono, email, email2, nombre)} disabled={disabled}>
                {loading? <Loading /> : 'Realizar Compra'}
            </Button>
        </div>
    )
}
export default CustomForm