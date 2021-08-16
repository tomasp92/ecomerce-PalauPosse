import ItemCount from './../ItemCount/index';
import Card from 'react-bootstrap/Card'
import './Styles.css'
import { Link } from 'react-router-dom';

const Item = ({ title, img, description, price, id})=> {
    const onAdd = (cantidad) => console.log(cantidad)
    console.log(img)
    return (
        <Card className="card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Link class='link' to={`/item/${id}`}>
                    <Card.Title>{title}</Card.Title>
                </Link>
                <Card.Text>
                    {description}
                </Card.Text>
                <div>
                    {price}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item