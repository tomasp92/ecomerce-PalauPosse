import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
const App = () => {
  const greeting = 'Acá va la lista de productos'
  return (
    <>
      <Header />
      <ItemListContainer greeting={greeting} />
    </>
  )
}
export default App
