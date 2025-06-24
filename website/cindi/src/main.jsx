import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
const router = createBrowserRouter([
  {
  path:'/',
  element: <App/>,
  errorElement: <NotFoundPage/>,
  children: [
    {
      index: true,
      element: <MainPage/>,
    },
    {
      path:'/login',
       element: <LoginPage/>
    }
  ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
