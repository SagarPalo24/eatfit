import {createBrowserRouter} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Body from './Body'

const appRouter = createBrowserRouter([
  {
    path: "/about",
    element: <About/>
  },
    {
    path: "/contact",
    element: <Contact/>
  },
    {
    path: "/cart",
    element: <Cart/>
  },
    {
    path: "",
    element: <Body/>
  }
]);

export default appRouter;