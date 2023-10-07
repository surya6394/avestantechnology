import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Status from './Component/Status';
import MainComp from './Component/MainComp';
import Popup from './Component/Popup';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainComp />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>

        <Footer />
        <Popup />
        <Status />



      </BrowserRouter>


    </>
  );
}

export default App;
