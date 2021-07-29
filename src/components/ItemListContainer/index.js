import ItemCount from '../ItemCount'
import ItemList from '../ItemList'


const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => console.log(cantidad)
  return (
    <div>
      {greeting}
      <ItemList />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer
