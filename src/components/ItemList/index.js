import { useEffect, useState } from 'react';
import Item from '../Item/index';
import './Styles.css'
import ItemDetailContainer from './../ItemDetail/index';

const ItemList = ()=> {
    const [productos, setProductos] = useState([])
    const onAdd = (cantidad) => console.log(cantidad)
    useEffect(()=>{
        const promise = new Promise((res)=>{
            setTimeout(()=>{
                const productos = [
                {
                    id: 0,
                    title: 'Nigiri',
                    description: 'Pequeño bloque ovalado de arroz frío cubierto con wasabi y una rebanada fina de salmón',
                    price: 100,
                    pictureUrl: 'productos/Nigiri.jpg'
                  },
                  {
                    id: 1,
                    title: 'Sahmi',
                    description: 'Rebanada fina de salmón',
                    price: 70,
                    pictureUrl: 'productos/sahimi.jfif'
                  }
                ]
                res(productos)
            }, 2000)
        })
        promise.then((res)=>{
            setProductos(res)
        })
        promise.catch ((error)=>{
            console.log(error)
        })
    },[])
    
    return(
        <div className='itemList'>
            {productos.map(producto => <Item 
                img={producto.pictureUrl}
                title={producto.title}
                description={producto.description}
                price={producto.price}
                />
            )
            }
        </div>
    )
    
}

export default ItemList