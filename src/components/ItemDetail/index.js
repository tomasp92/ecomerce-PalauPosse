import ItemCount from './../ItemCount/index'
import Card from 'react-bootstrap/Card'
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CartContext from '../../CartContext'
const ItemDetail = ({ item }) => {
  const [stock, setStock] = useState(item.stock)
  const {addItem, carrito} = useContext(CartContext)

  useEffect(() => {
    const productoEnCarrito = carrito.find(producto => producto.item.id == item.id)
    if (productoEnCarrito) setStock(item.stock - productoEnCarrito.quantity)

  }, [carrito, item])
  let history = useHistory()
  
  const [itemNumber, setItemNumber] = useState(false)
  const onAdd = (cantidad) => {
    setItemNumber(cantidad)
  }
  function addToCart() {
    addItem(item, itemNumber)
    history.push('/Cart')
  }

  return (
    <Card className="card">
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <div>
                {item.price}
            </div>
            { itemNumber ? 
              <button onClick={addToCart }>Termina tu compra</button> : 
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            }
        </Card.Body>
    </Card>
  )
}

export default ItemDetail
