import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import './Styles.css'

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
        <div className="buttonGroup">
            <div className="counter">
                <Button className="sumRest button" onClick={() => sumRestContador('resta')} variant="primary">-</Button>
                <div>{ contador }</div>
                <Button className="sumRest button" onClick={() => sumRestContador('suma')} variant="primary">+</Button>
            </div>
            <Button variant="primary button" onClick={() => onAdd(contador)}>Añadir al Carrito</Button>
        </div>
    )
}

export default ItemCount
