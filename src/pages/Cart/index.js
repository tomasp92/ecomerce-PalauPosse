import CartContext from '../../CartContext'
import { useContext, useState, useEffect } from 'react'
import CartItem from '../../components/CartItem/index'
import { Link } from 'react-router-dom'
import './Styles.css'
import Button from 'react-bootstrap/Button';
import CartCheckout from './../../components/CartCheckout/index';

const Cart = ()=> {
    const [totalPrice, setTotalPrice] = useState(0)
    const [checkout, setCheckout] = useState(false)
    const {carrito} = useContext(CartContext)
    
    useEffect(() => {
        let total = 0
        carrito.map( producto => total = total + producto.quantity * producto.item.price)
        setTotalPrice(total)
    }, [carrito])
    const terminarCompra = ()=>{
        setCheckout(true)
    }
    if (checkout){
        return <CartCheckout carrito={carrito} totalPrice={totalPrice} />
    }
    return (
        <>
            {
                carrito.length < 1 ? 
                <div>
                    <div>Aun no tienes productos en el carrito</div>
                    <Link className='linkIndex' to='/'>Elegir productos</Link>
                </div> 
                :
                <div className='itemList'>
                    {carrito.map((producto)=>{
                        return (
                            <div>
                                <CartItem 
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
                    <div className='totalPrice'>{totalPrice}</div>
                    <Button onClick={()=>terminarCompra()} variant="primary" size="lg">Terminar Compra</Button>
                </div>
            }
        </>
    )
}
export default Cart