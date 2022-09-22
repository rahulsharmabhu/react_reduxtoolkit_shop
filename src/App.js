import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
