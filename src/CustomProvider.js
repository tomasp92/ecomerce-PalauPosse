import { useState, createContext } from 'react'
import { Provider } from './CartContext'


const CustomProvider = ({children})=> {
    const [carrito, setCarrito] = useState([])

    const addItem = (item, quantity)=> {
        const itemInCart= carrito.find(element => element.item.id === item.id)
        if(!itemInCart){
            setCarrito([...carrito, {item, quantity}])
        } else {
            const newCarrito = [...carrito]
            newCarrito[carrito.indexOf(itemInCart)].quantity = itemInCart.quantity + quantity
            setCarrito(newCarrito)
        }
    }

    const removeItem = (id) => {
        const itemInCart= carrito.find(element => element.item.id === id)
        let newCarrito = [...carrito]
        newCarrito.splice(carrito.indexOf(itemInCart), 1)
        setCarrito(newCarrito)
    }

    const clear = ()=> {
        setCarrito([])
    }
    return(
        <Provider value={{ addItem, removeItem, clear, carrito }}>
            {children}
        </Provider>
    )
}

export default CustomProvider