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
import HomeScreens from './screens/HomeScreens';
import ProductScreens from './screens/ProductScreens';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route  path='/' element={<HomeScreens />} />
      <Route path='/product/:_id' element={<ProductScreens />} />
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
