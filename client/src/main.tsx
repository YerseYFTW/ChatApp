import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
//import ChatAppFinal from './routes/secret';
import Login from './routes/login';
import Signup from './routes/signup';
import APIkeys from './routes/APIkeys';
import APIdocs from './routes/APIdocumentatio';
// import MainPG from './routes/mainpg';
import { AuthService } from "@genezio/auth";
import ChatAppFinal from './routes/chatappmain';

AuthService.getInstance().setTokenAndRegion("0-uyoggdzj6nlh75bdngoj6khwzm0uczso", "us-east-1");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chatapp",
    element: <ChatAppFinal />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/apikeys",
    element: <APIkeys />,
  },
  {
    path: "/apidocs",
    element: <APIdocs />,
  },
  /*{
    path: "/mainpg",
    element: <MainPG />,
  },*/
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
