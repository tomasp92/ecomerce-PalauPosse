import ItemCount from '../ItemCount'

const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => console.log(cantidad)
  return (
    <div>
      {greeting}
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer
