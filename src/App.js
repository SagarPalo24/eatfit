import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from "react-router-dom";
import useOnline from "./hooks/useOnline";
import { Provider } from "react-redux";
import appStore from "./utils/store"

function App() {
   const isOnline = useOnline();
   if (!isOnline){
     return
     <h3>Seems Somthing went wrong Check Internet Connection</h3>
   }
  return (
    <Provider store={appStore}>
    <Header/>
    <Outlet/>
    <Footer/>
    </Provider>
  )
}

export default App;
