import { useEffect, useState } from 'react';
import Item from '../Item/index';
import './Styles.css'
import { Spinner } from 'react-bootstrap';

const ItemList = ({params})=> {
    console.log("🚀 ~ params", params)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [showProductos, setShowProductos] = useState([])
    const onAdd = (cantidad) => console.log(cantidad)
    useEffect(()=>{
        const promise = new Promise((res)=>{
            setTimeout(()=>{
                const products = [
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
                res(products)
            }, 2000)
        })
        promise.then((res)=>{
            console.log('res', res)
            setProductos(res)
            setLoading(false)
            console.log('then', productos)
        })
        promise.catch ((error)=>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        if (params.id){
            console.log('entra al if')
            const filtroPorCategoria = productos.filter(producto=> producto.categoria === params.id)
            setShowProductos(filtroPorCategoria)
        }else{
            console.log('entra al else. productos', productos)
            setShowProductos(productos)
        }
        console.log('entra al use effect')
    },[params])
    if(loading){
        return( 
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
    }
    return(
        <div className='itemList'>
            {showProductos.map(producto => 
                <Item
                key={producto.id} 
                img={producto.pictureUrl}
                title={producto.title}
                description={producto.description}
                price={producto.price}
                id={producto.id}
                />
            )
            }
        </div>
    )
    
}

export default ItemList