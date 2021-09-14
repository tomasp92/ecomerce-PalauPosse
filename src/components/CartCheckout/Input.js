import { FloatingLabel, Form } from "react-bootstrap"
import { useState } from "react"
const Input = ({ setInputValue, controlId, type })=>{
    const [isInvalid, setIsInvalid] = useState(false)	

    const validateInput = (e)=> {
        if( (controlId === 'phone' && !isNaN(e.target.value)) || controlId != 'phone'){
            setIsInvalid(false)
        } else {
            setIsInvalid(true)
        }
        setInputValue(e.target.value)
    }
    return(
        <FloatingLabel controlId={controlId} label={type} className="mb-3">
            <Form.Control 
                type={controlId} 
                placeholder={type} 
                isInvalid={isInvalid}
                onChange={ (e)=> validateInput(e) } 
            />
        </FloatingLabel>
    )
}
export default Input