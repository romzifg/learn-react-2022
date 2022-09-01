import { Routes, Route } from 'react-router-dom'
import Authentication from './layout/authentication/authentication';
import Home from "./layout/home/home";
import Navigation from './layout/navigation/navigation';

const Shop = () => {
  return (
    <h1>Shop</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
