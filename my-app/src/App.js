  import './App.css';
  import Navbar from './components/NavBar/Navbar';
  import {BrowserRouter,Routes,Route} from 'react-router-dom'
  import Home from './Pages/Home';

  import Cart from './Pages/Cart';
  import LoginSignup from './Pages/LoginSignup';
  import ProductList from './Pages/ProductList';
  import Footer from './components/Footer/Footer';
  import Men from './Pages/Men';
  import Women from './Pages/Women';
  import Kids from './Pages/Kids';

  function App() {
    return (
    <div>
      <BrowserRouter>
      <Navbar/>
  <Routes>
  <Route path = "/" element ={<Home/>}/>
  <Route path = "/mens" element ={<Men/>}/>
  <Route path = "/womens" element ={<Women/>}/>
  <Route path = "/kid" element ={<Kids/>}/>
  <Route path='/product' element = {(<ProductList/>)}>
  <Route path=':productId' element = {<ProductList/>}/>
  </Route>
  <Route path = "/carts" element ={<Cart/>}/>
  <Route path = "/log" element ={<LoginSignup/>}/>

  </Routes>
  <Footer/>

    </BrowserRouter>

    </div>
    );
  }

  export default App;
