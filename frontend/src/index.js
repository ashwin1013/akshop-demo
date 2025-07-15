import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './store';

// Bootstrap & custom styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './components/PrivateRoute';
import HomeScreens from './screens/HomeScreens';
import ProductScreens from './screens/ProductScreens';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route  path='/' element={<HomeScreens />} />
      <Route path='/product/:_id' element={<ProductScreens />} />
      <Route path='/cart' element={ <CartScreen />}/>
      <Route path='/login' element={ <LoginScreen />}/>
      <Route path='/register' element={ <RegisterScreen />}/>
     

     <Route path='' element={<PrivateRoute />}> 
     <Route path="/shipping" element={<ShippingScreen />} />
     <Route path="/payment" element={<PaymentScreen />} />
     <Route path="/placeorder" element={<PlaceOrderScreen />} />
     </Route>
     

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
