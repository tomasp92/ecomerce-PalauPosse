
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../CartContext'
import { useContext } from 'react'
import './Styles.css'
const CartItem = ({ quantity, title, img, description, price, id})=> {
    const { removeItem } = useContext(CartContext)
    return(
        <Card className="cartItem">
            <Card.Img variant="top" src={img} />
            <Card.Body className='cartItemBody'>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='cardText'>{description}</Card.Text>
                <div>{price}</div>
                <div>{quantity}</div>
            </Card.Body>
            <FontAwesomeIcon onClick={ ()=> removeItem(id) } icon={ faTrash } />
        </Card>
    )
}

export default CartItem