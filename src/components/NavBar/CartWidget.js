import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../CartContext'
import { useContext, useState, useEffect } from 'react'

const CartWidget = () => {
    const [totalProductos, setTotalProductos] = useState(0)
    const {carrito} = useContext(CartContext)
    useEffect(() => {
            let total = 0
            carrito.map( producto => total = total + producto.quantity)
            setTotalProductos(total)
        }, [carrito])

    return(
        <>
            {totalProductos > 0 && 
                <div>
                    <div>{totalProductos}</div>
                    <FontAwesomeIcon icon={ faCartPlus } />
                </div>
            }
        </>
    )
}

export default CartWidget
