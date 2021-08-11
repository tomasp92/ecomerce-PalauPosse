import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/index'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Styles.css'
import ItemDetailContainer from './components/ItemDetailContainer/index';
const App = () => {
  const greeting = 'Acá va la lista de productos'
  return (
    <BrowserRouter>
      <Header />
      <div className='body' >
        <div className='content'>
          <Switch>
            <Route path='/Categoria/:id'>
              <ItemListContainer className='ItemListContainer' greeting={greeting} />
            </Route>
            <Route path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/' component={ItemListContainer} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}
      export default App
