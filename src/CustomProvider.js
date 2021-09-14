import { useState, useEffect } from 'react'
import { Provider } from './CartContext'

let productos
if ( localStorage.getItem('ListaCarrito') ){
     productos = JSON.parse(localStorage.getItem('ListaCarrito'))
} else {
    productos = []
}

const CustomProvider = ({children})=> {
    const [carrito, setCarrito] = useState(productos)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProductos, setTotalProductos] = useState(0)
    
    useEffect(() => {
        localStorage.setItem("ListaCarrito", JSON.stringify(carrito))
        let precioTotal = 0
        let totalProductos = 0
        carrito.map( producto =>{ 
            precioTotal = precioTotal + producto.quantity * producto.item.price
            totalProductos = totalProductos + producto.quantity
        })
        setTotalPrice(precioTotal)
        setTotalProductos(totalProductos)
    }, [carrito])

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
        localStorage.setItem("ListaCarrito", JSON.stringify(newCarrito))
        setCarrito(newCarrito)
    }

    const clear = ()=> {
        setCarrito([])
        localStorage.setItem("ListaCarrito", null)
    }
    return(
        <Provider value={{ addItem, removeItem, clear, carrito, totalPrice, totalProductos }}>
            {children}
        </Provider>
    )
}

export default CustomProvider