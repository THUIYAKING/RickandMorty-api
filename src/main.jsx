import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RickAndMorty from './components/rickandmorty';
import Character from './components/Character';
import ErrorPage from './components/ErrorPage';
import References from './components/useRef';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RickAndMorty />,
    // errorElement: <ErrorPage />,
    // children : [
    //   {
    //     path : '/:id',
    //     element: <Character />
    //   }
    // ]
  },

  //dynamic routing
  {
    path: "/:id",
    element: <Character />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: '/refs',
  //   element: <References />,
  //   errorElement: <ErrorPage />
  // }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
