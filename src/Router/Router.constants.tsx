import {
  createBrowserRouter
} from 'react-router-dom'
import { LoginPage } from '../pages/Login'
import { WelcomePage } from '../pages/Welcome'

export const authenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />
  }
])

export const unAuthenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  }
])
