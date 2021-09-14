import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const { totalProductos } = useContext(CartContext)

    return(
        <>
            {totalProductos > 0 && 
                <div className='cartWidget'>
                    <div>{totalProductos}</div>
                    <FontAwesomeIcon icon={ faCartPlus } />
                </div>
            }
        </>
    )
}

export default CartWidget
