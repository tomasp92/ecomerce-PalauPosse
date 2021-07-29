import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial)
    const sumRestContador = (operacion)=>{
        if (operacion === 'suma' && contador < stock){
            setContador(contador + 1)
        } else if (operacion === 'resta' && contador > 0) {
            setContador(contador - 1)
        }
    }
    return (
        <>
            <p>
                <Button onClick={() => sumRestContador('resta')} variant="primary">-</Button>
                { contador }
                <Button variant="primary" onClick={() => sumRestContador('suma')}>+</Button>
            </p>
            <Button variant="primary" onClick={() => onAdd(contador)}>Añadir al Carrito</Button>
        </>
    )
}

export default ItemCount
