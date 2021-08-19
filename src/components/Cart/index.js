import CartContext from '../../CartContext'
import { useContext, useState, useEffect } from 'react'
import CartItem from './../CartItem/index'
import { Link } from 'react-router-dom'
import './Styles.css'


const Cart = ()=> {
    const [totalPrice, setTotalPrice] = useState(0)
    const {carrito} = useContext(CartContext)
    console.log("🚀 ~ carrito", carrito.length)
    useEffect(() => {
        let total = 0
        carrito.map( producto => total = total + producto.quantity * producto.item.price)
        setTotalPrice(total)
    }, [carrito])

    return (
        <>
            {carrito.length < 1 ? 
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
                    <div class='totalPrice'>{totalPrice}</div>
                </div>
            }
        </>
    )
}
export default Cart