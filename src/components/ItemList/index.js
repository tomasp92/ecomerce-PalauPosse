import Item from '../Item'
import './Styles.css'

const ItemList = ({ productos })=> 
    <div className='itemList'>
        {productos.map(producto => 
            <Item
            key={producto.id} 
            img={producto.pictureUrl}
            title={producto.title}
            description={producto.description}
            price={producto.price}
            id={producto.id}
            />
        )}
    </div>

export default ItemList