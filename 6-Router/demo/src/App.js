import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Category from './components/Category';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Category />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      {/* <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <hr/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
