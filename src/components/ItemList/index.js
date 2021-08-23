import { useEffect, useState } from 'react'
import Item from '../Item/index'
import './Styles.css'
import Loading from './../Loading'
import { firestore } from './../../firebase'

const ItemList = ({params})=> {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const onAdd = (cantidad) => console.log(cantidad)
    useEffect(() => {
        let query
        const collectionProductos = firestore.collection('productos')
        if(params.id){
            const filtro = collectionProductos.where('categoria', '==', parseInt(params.id))
            query = filtro.get()
        } else {
            query = collectionProductos.get()
        }
        query.then((resultados)=>{
            const resultadoParseado = []
            resultados.forEach((documento)=>{
                const id = documento.id
                const data = documento.data()
                const dataFinal = {id, ...data}
                resultadoParseado.push(dataFinal)
            })
            setProductos(resultadoParseado)
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