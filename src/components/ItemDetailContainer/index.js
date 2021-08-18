import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Styles.css'
import ItemDetail from './../ItemDetail/index';
import Loading from './../Loading';

const productos = [
    {
      id: 0,
      title: 'Nigiri',
      description: 'Pequeño bloque ovalado de arroz frío cubierto con wasabi y una rebanada fina de salmón',
      price: 100,
      pictureUrl: '/productos/Nigiri.jpg',
      categoria: '1'
    },
    {
      id: 1,
      title: 'Sahmi',
      description: 'Rebanada fina de salmón',
      price: 70,
      pictureUrl: '/productos/sahimi.jpg',
      categoria: '2'
    }
  ]
  

const ItemDetailContainer = () => {
  const params = useParams()
  console.log("params", params)
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  const getItems = () => {
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(productos.filter(prod => prod.id === parseInt(params.id)))
        reject("Ocurrió un error al traer los productos")
      }, 2000)
    })
    return promise
  }

  useEffect(()=>{
    const items = getItems()
    items.then((res)=>{
      setItem(res)
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
