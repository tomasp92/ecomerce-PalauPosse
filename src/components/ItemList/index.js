import { useEffect, useState } from 'react';
import Item from '../Item/index';
import './Styles.css'
import Loading from './../Loading';

const products = [
    {
        id: 0,
        title: 'Nigiri',
        description: 'Pequeño bloque ovalado de arroz frío cubierto con wasabi y una rebanada fina de salmón',
        price: 100,
        pictureUrl: 'productos/Nigiri.jpg',
        categoria: 1
      },
      {
        id: 1,
        title: 'Sahmi',
        description: 'Rebanada fina de salmón',
        price: 70,
        pictureUrl: 'productos/sahimi.jpg',
        categoria: 2
      }
]

const ItemList = ({params})=> {
    console.log("🚀 ~ params", params)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const onAdd = (cantidad) => console.log(cantidad)
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("setTimeOut");
                if (params.id) {
                    resolve(products.filter(prod => prod.categoria === parseInt(params.id)))
                } else {
                    resolve(products)
                };
                reject("Ocurrió un error al traer los productos")
            }, 2000)
            
        })
        promise.then((resolve) => {
            setProductos(resolve)
            setLoading(false)
        })
        
    }, [params]);
    return(
        <>
            { loading ? 
                <Loading /> 
                :
                <div className='itemList'>
                    {productos.map(producto => 
                        <Item
                        key={producto.id} 
                        img={producto.pictureUrl}
                        title={producto.title}
                        description={producto.description}
                        price={producto.price}
                        id={producto.id}
                        />
                    )}
                </div>
            }
        </>
    )
    
}

export default ItemList