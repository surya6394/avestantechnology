import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home  from './pages/Home';
import Page404 from './pages/Page404';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Header2 from './Component/Header2';
import Login from './Component/Login';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Header2 />
    <Login/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Page404/>} />
      </Routes>
    <Footer />  
    </BrowserRouter>
    </>
  );
}

export default App;
