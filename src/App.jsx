
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss'
import Home from './components/Home';
import Cart from './components/Product/Cart';


function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='cartPage' element={<Cart/>}/>
         
          
        </Routes>
      </Router>
    </>
  )
}

export default App
