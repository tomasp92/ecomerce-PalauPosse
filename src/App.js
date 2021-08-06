import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/index'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Styles.css'
const App = () => {
  const greeting = 'Acá va la lista de productos'
  return (
    <BrowserRouter>
      <Header />
      <div className='body' >
        <div className='content'>
          <Switch>
            <Route path='/Categoria/:id' component={ItemListContainer}/>
            <Route path='/'>
              <ItemListContainer className='ItemListContainer' greeting={greeting} />
            </Route>
          </Switch>
        </div>
      </div>
      </BrowserRouter>
      )
}
      export default App
