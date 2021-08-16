import ItemCount from './../ItemCount/index';
import Card from 'react-bootstrap/Card'
import './Styles.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const ItemDetail = ({ item }) => {
  let history = useHistory()
  const [itemNumber, setItemNumber] = useState(false)
  const onAdd = (cantidad) => {
    setItemNumber(cantidad)
  }
  function goToCart() {
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
              <button onClick={goToCart }>Termina tu compra</button> : 
              <ItemCount stock={5} initial={1} onAdd={onAdd} />}
        </Card.Body>
    </Card>
  )
}

export default ItemDetail
