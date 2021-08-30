import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Styles.css'
import { firestore } from './../../firebase'
import Loading from './../../components/Loading'
import ItemDetail from './../../components/ItemDetail'


const ItemDetailContainer = () => {
  const params = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  const getItems = () => {
    return firestore.collection('productos').doc(`${params.id}`).get()
  }

  useEffect(()=>{
    const items = getItems()
    items.then((documento)=>{
      const id = documento.id
      const data = documento.data()
      const producto = {id, ...data}
      setItem(producto)
      setLoading(false)
    })
    items.catch ((error)=>{
      console.log('error', error)
    })
  },[params])
  
  return (
    <>
      {loading? <Loading /> : <ItemDetail item={item}/>}
    </>
  )
}

export default ItemDetailContainer
