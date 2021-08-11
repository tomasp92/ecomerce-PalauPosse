import { useParams } from 'react-router-dom'
import ItemList from '../ItemList'
import './Styles.css'

const ItemListContainer = ({ greeting }) => {
  const params = useParams()
  const onAdd = (cantidad) => console.log(cantidad)
  console.log(params)
  return (
    <div className="itemListContainer">
      {greeting}
      <ItemList params={params}/>
    </div>
  )
}

export default ItemListContainer
