import CartContext from '../../CartContext'
import { useContext } from 'react'

const Cart = ()=> {
    const {carrito} = useContext(CartContext)
    console.log("🚀 ~ carrito", carrito)
    return (
        <div>
           {/*  {carrito.map((item)=>{
                return (
                    <div>
                        {item.title}
                    </div>
                )
            })
            } */}
        </div>
    )
}
export default Cart