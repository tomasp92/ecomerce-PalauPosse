import ItemCount from './../ItemCount/index';
import Card from 'react-bootstrap/Card'

const Item = ({title, img, description, price})=> {
    const onAdd = (cantidad) => console.log(cantidad)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <div>
                    {price}
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </Card.Body>
        </Card>
    )
}

export default Item