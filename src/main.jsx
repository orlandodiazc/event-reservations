import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import store from './redux/configureStore';
import Home from './routes/Home';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        name: 'Rockets',
      },
      {
        path: 'missions',
        element: <Missions />,
        name: 'Missions',
      },
      {
        path: 'profile',
        element: <Profile />,
        name: 'Profile',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
