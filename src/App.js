import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import CartProvider from './components/Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route 
              path='/descripcion/:descripcionId'
              element={<ItemListContainer />}
            />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
