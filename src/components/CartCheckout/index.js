import { FloatingLabel, Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import './Styles.css'
import Item from './../Item'
import { firestore } from './../../firebase'
import { useState } from 'react'
import Loading from './../Loading';

const CartCheckout = ({carrito, totalPrice})=>{
    console.log("🚀 ~ carrito", carrito)
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [idDeOrden, setIdDeOrden] = useState('')
    const [loading, setLoading] = useState(false)
    const [mensajeCheckout, setMensajeCheckout] = useState(false)
    const ordenCompletada = <div> Tu orden fue completada con exito, ante cualquier duda comunicarse con el id de orden: {idDeOrden} </div>
    const submitForm = ()=>{
        setLoading(true)
        const productosCheckout = carrito.map((producto)=> {
            firestore.collection('productos').doc(`${producto.item.id}`).update({
                stock: producto.item.stock - producto.quantity
            })
            return { 
                id: producto.item.id, 
                title: producto.item.title, 
                price: producto.item.price, 
                quantity: producto.quantity
            }
            })
        const newOrder = {
            buyer: {nombre: nombre, email: email, telefono: telefono},
            items:productosCheckout,
            date: new Date(),
            total: totalPrice
        }
        
        firestore.collection('orders').add(newOrder)

        .then(({ id }) => {
            setIdDeOrden(id)
            setLoading(false)
            setMensajeCheckout(true)
        }).catch(err =>{
            console.log("🚀 ~ err", err)
        })
    }
    return(
        <div>
            {mensajeCheckout ? ordenCompletada :
                <>
                    <div className='checkout'>
                        <div className='form'>
                            <FloatingLabel controlId="name" label="Nombre" className="mb-3">
                                <Form.Control type="name" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)} />
                            </FloatingLabel>
                            <FloatingLabel controlId="email" label="Email" className="mb-3">
                                <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                            </FloatingLabel>
                            <FloatingLabel controlId="phone" label="Telefono" className="mb-3">
                                <Form.Control type="phone" placeholder="Telefono" onChange={(e)=>setTelefono(e.target.value)} />
                            </FloatingLabel>
                        </div>
                        <div className='productos'>
                            {carrito.map((producto)=>{
                                return (
                                    <div>
                                        <Item className='checkoutItem'
                                            key={producto.item.id}
                                            img={producto.item.pictureUrl}
                                            title={producto.item.title}
                                            description={producto.item.description}
                                            price={producto.item.price}
                                            id={producto.item.id}
                                            quantity={producto.quantity}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <Button variant="primary" type="submit" onClick={submitForm}>
                        {loading? <Loading /> : 'Enviar'}
                    </Button>
                </>
            }
        </div>
    )
}

export default CartCheckout