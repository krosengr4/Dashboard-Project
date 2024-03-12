//! This file is to create a browser router and connect it with Root div from index.html

//? Import ReactDOM and router 
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//? Import our webpages and app.jsx 
import App from './app.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './pages/Error';
// import Profile from './pages/Profile';

//? Create router that go to each webpage
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        }, {
          path: '/login',
          element: <Login />
        }, {
          path: '/signup',
          element: <Signup />
        }
      ]
    },
  ]);

  //? Get root html and render
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
  


  /* Profile page
  {
    path: '/profiles/:profileId',
    element: <Profile />
  }
  */