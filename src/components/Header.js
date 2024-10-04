import { MdOutlineAddHome } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom"
import useOnline from "../hooks/useOnline"
import { useSelector } from 'react-redux'
import { IoMdRadioButtonOn } from "react-icons/io";

const Header =() =>{
  const cartItems=useSelector((store)=>store.cart.items);
  const isOnline = useOnline();
  console.log ("online status", isOnline)
	return(
		<>
		<nav className="navbar navbar-light bg-light shadow-xl  ">
  <div className="container header ">
    <Link className="nav-link d-flex" to="">
    <img className="icon" src="https://5.imimg.com/data5/SELLER/Default/2021/6/OJ/KJ/YX/6767130/smart-restaurant-software-500x500.png" width="100px"/>
    <span>{isOnline? <IoMdRadioButtonOn  color="green"/>: <IoMdRadioButtonOn  color="red" />}</span>
    </Link>
   	<ul className=" bar d-flex font-semibold  hover:text-blue">
  <li className=" hover:text-sky-800" >
    <Link className="nav-link" to="">
    Home 
    </Link>
  </li>

  <li className="hover:text-sky-800">
  <Link className="nav-link" to="/about">
     About
    </Link>
  </li>
  <li className="hover:text-blue-800">
  <Link className="nav-link " to="/contact">
    Contact Us
    </Link>
  </li>
  <li className="hover:text-sky-800">
  <Link className="nav-link d-flex" to="/cart">
    <IoCartOutline size={20}/>Cart<sub>{cartItems.length}</sub>
    </Link>
  </li>
    <li className=" hover:text-sky-800">
    <Link className="nav-link " to ="/instamart">
    Instamart
    </Link>
  </li>
</ul>

  </div>
</nav>

		</>
		);
};

export default Header;