import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider} from "@react-oauth/google";
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
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
