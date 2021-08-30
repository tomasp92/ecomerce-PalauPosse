import ItemCount from './../ItemCount/index'
import Card from 'react-bootstrap/Card'
import './Styles.css'
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CartContext from '../../CartContext'
const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext)
  
  let history = useHistory()
  const [itemNumber, setItemNumber] = useState(false)
  const onAdd = (cantidad) => {
    setItemNumber(cantidad)
  }
  function addToCart() {
    addItem(item, itemNumber)
    history.push('/Cart')
  }
  console.log(item)
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
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            }
        </Card.Body>
    </Card>
  )
}

export default ItemDetail
