import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import CartView from './components/Cart/CartViewer';
import { CartContextProvider } from './components/Context/cartContext';
// import { exportItemsToFirestore } from './services/firebase';

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
      {/*<button onClick={ exportItemsToFirestore}>Export</button> utilizar para exportar*/}
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route 
              path='/descripcion/:descripcionId'
              element={<ItemListContainer />}
            />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView/>} />
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
