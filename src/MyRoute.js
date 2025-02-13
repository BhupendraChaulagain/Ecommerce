import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Rejister from './pages/Rejister'



const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path = '/' element={<Layouts/>}>
              <Route index element={<Homepage/>}/>
              <Route path = 'products' element = {<Products/>} />
              <Route path='productdetails/:productId' element={<ProductDetails/>}/>
              <Route path='cart' element={<Cart />} />
              <Route path = 'register' element = {<Rejister/>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute
