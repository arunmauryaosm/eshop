import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Product from './Products';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import Error from './Error';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/singleproduct/:id' element={<SingleProduct/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
