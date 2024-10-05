import {createBrowserRouter} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Body from './Body'
import App from '../App'
import Menu from './Menu'
import Login from './Login'
import ErrorPage from './ErrorPage'
import {lazy,Suspense } from "react"


const login =lazy (()=>import("./Login"))

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement:<ErrorPage/>,
  children:[
      {
      path: "about",
      element: <About/>
      },
      {
      path: "",
      element: <Body/>
      },
      {
      path: "contact",
      element: <Contact/>
      },
      {
      path: "cart",
      element: <Cart/>
      },
      {
      path: "menu/:id",
      element: <Menu/>
      },
      {
      path: "login",
      element: <Suspense><Login/></Suspense>
      }
    ]
}

]);

export default appRouter;