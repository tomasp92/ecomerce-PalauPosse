import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Styles.css'
import ItemDetail from './../ItemDetail/index';
import { Spinner } from 'react-bootstrap';

const items = [
    {
      id: 0,
      title: 'Nigiri',
      description: 'Pequeño bloque ovalado de arroz frío cubierto con wasabi y una rebanada fina de salmón',
      price: 100,
      pictureUrl: 'productos/Nigiri.jpg',
      categoria: '1'
    },
    {
      id: 1,
      title: 'Sahmi',
      description: 'Rebanada fina de salmón',
      price: 70,
      pictureUrl: 'productos/sahimi.jpg',
      categoria: '2'
    }
  ]
  

const ItemDetailContainer = () => {
  const params = useParams()
  console.log(params)
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const getItems = () => {
    const promise = new Promise((res)=>{
      setTimeout(()=>{
        res(items)
      }, 2000)
    })
    return promise
  }
  useEffect(()=>{
    const allItems = getItems()
    allItems.then((productos)=>{
      const producto = productos.filter(producto=> producto.categoria === params.id)
      setProducto(producto)
      setLoading(false)
    })
    allItems.catch ((error)=>{
        console.log('error', error)
    })
    
  },[])
  if(loading){
    console.log("!producto")
    return( 
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
  return (
    <ItemDetail item={producto}/>
  )
}

export default ItemDetailContainer
