import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Styles.css'
import { firestore } from '../../firebase'
import ItemList from './../../components/ItemList'
import Loading from './../../components/Loading'

const ItemListContainer = ({ greeting }) => {
  const params = useParams()
  const onAdd = (cantidad) => console.log(cantidad)
  
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      let query
      const collectionProductos = firestore.collection('productos')
      if(params.id){
          query = collectionProductos.where('categoria', '==', parseInt(params.id)).get()
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
  return (
    <>
      { loading ? 
        <Loading /> 
        :
        <div className="itemListContainer">
          {greeting}
          <ItemList params={params} productos={productos}/>
        </div>
      }
    </>
  )
}

export default ItemListContainer
