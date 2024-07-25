import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Design from './Components/design';
import reportWebVitals from './reportWebVitals';
import Abhigyan from './Components/abhigyan';
import Ziyad from './Components/ziyad';
import Phonk from './Components/phonk';
import Ktk from './Components/ktk'
import Ayush from './Components/ayush';
import End from './Components/end';
import Lol from './Components/lol'
import Abhigya from './Components/abhsneh'
import No from './Components/no'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/design",
    element: <Design />
  },
  {
    path:"/abhigyan",
    element: <Abhigyan />
  },
  {
    path:"/ziyad",
    element: <Ziyad back='ziyad'/>
  },{
    path:"/phonk",
    element: <Phonk />
  },{
    path:"/ktk",
    element: <Ktk />
  },{
    path:"/ayush",
    element: <Ayush back='ayush'/>
  },
  {
    path:"/end",
    element: <End />
  },
  {
    path:"/lol",
    element: <Lol />
  },
  {
    path:"/abhigya",
    element: <Abhigya />
  },{
    path:"/no",
    element: <No />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
