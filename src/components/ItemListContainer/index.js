import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import './Styles.css'
import ItemDetailContainer from './../ItemDetailContainer/index';

const ItemListContainer = ({ greeting }) => {
  const params = useParams()
  console.log(params)
  const onAdd = (cantidad) => console.log(cantidad)
  return (
    <div className="itemListContainer">
      {greeting}
      <ItemList />
      <ItemDetailContainer />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer
