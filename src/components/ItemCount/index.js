import Card from 'react-bootstrap/Card'
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Nagiri</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <p>
                        <Button onClick={() => sumRestContador('resta')} variant="primary">-</Button>
                        { contador }
                        <Button variant="primary" onClick={() => sumRestContador('suma')}>+</Button>
                    </p>
                    <br /><br />
                    <Button variant="primary" onClick={() => onAdd(contador)}>Añadir al Carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount
