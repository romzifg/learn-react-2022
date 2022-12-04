import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListiener,
} from "./utils/firebase/firebase";
import Authentication from './layout/authentication/authentication';
import Home from "./layout/home/home";
import Navigation from './layout/navigation/navigation';
import Shop from './layout/shop/shop';
import Checkout from './layout/checkout/checkout';
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListiener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
