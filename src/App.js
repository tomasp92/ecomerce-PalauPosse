import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import './Styles.css'
const App = () => {
  const greeting = 'Acá va la lista de productos'
  return (
    <>
      <Header />
      <div className='body' >
        <div className='content'>
          <ItemListContainer className='ItemListContainer' greeting={greeting} />
        </div>
      </div>
    </>
  )
}
export default App
