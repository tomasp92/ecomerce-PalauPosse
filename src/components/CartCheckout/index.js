import './Styles.css'
import Item from './../Item'
import { firestore } from './../../firebase'
import { useState } from 'react'
import CustomForm from './Form'
import ToastMessege from './../ToastMessege'


const CartCheckout = ({carrito, totalPrice})=>{
    const [idDeOrden, setIdDeOrden] = useState('')
    const [loading, setLoading] = useState(false)
    const [mensajeCheckout, setMensajeCheckout] = useState(false)
    const [toast, setToast] = useState(false)
    const [toastText, setToastText] = useState('')
    

    const ordenCompletada = <div> Tu orden fue completada con exito, ante cualquier duda comunicarse con el id de orden: {idDeOrden} </div>
    
    const onFormSubmit = (telefono, email, email2, nombre)=>{
        setLoading(true)
        if(email2 != email){
            setToastText('Los emails proporcionados son diferentes.')
            return setToast(true)
        }
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
        }).catch( () =>{
            setToastText('Su pedido no pudo ser colocado, intentelo nuevamente')
            setToast(true)
        })
    }
    return(
        <div>
            {mensajeCheckout ? ordenCompletada :
                <>
                    <div className='checkout'>
                       <CustomForm onFormSubmit={ onFormSubmit } loading={ loading } />
                       { toast && <ToastMessege setToast={setToast} title='Hubo un error' text={toastText} /> }
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
                   
                </>
            }
        </div>
    )
}

export default CartCheckout