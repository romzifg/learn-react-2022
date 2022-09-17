import { Routes, Route } from 'react-router-dom'
import Authentication from './layout/authentication/authentication';
import Home from "./layout/home/home";
import Navigation from './layout/navigation/navigation';
import Shop from './layout/shop/shop';
import Checkout from './layout/checkout/checkout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
