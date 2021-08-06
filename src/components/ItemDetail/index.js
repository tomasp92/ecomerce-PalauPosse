import ItemCount from './../ItemCount/index';
import Card from 'react-bootstrap/Card'
import './Styles.css'
const ItemDetail = ({ item }) => {
  console.log("🚀 ~ item", item)
  const onAdd = (cantidad) => console.log(cantidad)
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
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Card.Body>
    </Card>
)
}

export default ItemDetail
