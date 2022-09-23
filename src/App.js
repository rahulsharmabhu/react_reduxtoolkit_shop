import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className='app'>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
     </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
