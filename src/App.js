// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ProductCard from './components/productCard';
// import User from './components/user';
import Cartpage from './components/Cartpage';

function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route exact path="/" element={<ProductCard/>}/>
         <Route exact path="/cart" element={<Cartpage/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
