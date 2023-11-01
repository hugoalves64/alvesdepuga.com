
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/guitares' element={<ShopCategory category="guitares"/>}/>
        <Route path='/divers' element={<ShopCategory category="divers"/>}/>
        <Route path='/apropos' element={<ShopCategory category="apropos"/>}/>
        <Route path='/revendeur' element={<ShopCategory category="revendeur"/>}/>
        <Route path='/contact' element={<ShopCategory category="contact"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
