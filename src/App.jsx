import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsCards from '../src/pages/ProductsCards.jsx'
import Home from '../src/pages/Home.jsx'
import Login from '../src/pages/Login.jsx'
import Nbar from '../src/components/Navbar.jsx'
import Footer from '../src/components/Footer.jsx'
import Registro from '../src/pages/Registro.jsx'
import Administration from './pages/Administration.jsx'
// import Customer from './components/Customer.jsx'
import Delfood from './components/Delfood.jsx'


function App() {
  return (
    <Router>
        <Nbar />
      <Routes>
        <Route path="/" element={<Home />}/>
    
        <Route path="/Menus" element={<ProductsCards />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Registro" element={<Registro />} /> 
        <Route path='/Administration' element={<Administration />}/>
        <Route path='/Delfood' element={<Delfood/>}/> 
        {/* <Route path='/Customer' element={<Customer/>}/> */}

        {/*<Route path='/Customer' element={<Customer/>}/>
        
        {/* <Route path="/cart" element={<Carrito />} /> */}
        {/* <Route path="/404" element={<Error404 />} />         */}
        </Routes> 
        <Footer />
    </Router>  
  );
}

export default App