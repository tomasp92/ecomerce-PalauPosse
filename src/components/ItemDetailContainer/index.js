import { useState, useEffect } from 'react'
import './Styles.css'
import ItemDetail from './../ItemDetail/index';

const item = 
  {
    id: 0,
    title: 'Nigiri',
    description: 'Pequeño bloque ovalado de arroz frío cubierto con wasabi y una rebanada fina de salmón',
    price: 100,
    pictureUrl: 'productos/Nigiri.jpg'
  }
  

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const getItems = () => {
    const promise = new Promise((res)=>{
      setTimeout(()=>{
        res(item)
      }, 2000)
    })
    return promise
 
  }
  useEffect(()=>{
    const items = getItems()
    items.then((res)=>{
      setProducto(res)
    })
    items.catch ((error)=>{
        console.log('error', error)
    })
    
  },[])
  return (
    <ItemDetail item={producto}/>
  )
}

export default ItemDetailContainer
