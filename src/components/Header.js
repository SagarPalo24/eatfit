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
  <div className="container header">
    <Link className="nav-link d-flex" to="">
    <img className="icon" src="https://5.imimg.com/data5/SELLER/Default/2021/6/OJ/KJ/YX/6767130/smart-restaurant-software-500x500.png" width="100px"/>
    <span>{isOnline? <IoMdRadioButtonOn  color="green"/>: <IoMdRadioButtonOn  color="red" />}</span>
    </Link>
   	<ul className=" bar d-flex gap-2 font-semibold  hover:text-blue">
  <li className=" gap-1 hover:text-sky-800" >
    <Link className="nav-link d-flex" to="">
    <MdOutlineAddHome size={20}/>
    Home 
    </Link>
  </li>

  <li className="flex hover:text-sky-800">
  <Link className="nav-link d-flex" to="/about">
    < IoIosContact size={20}/> About
    </Link>
  </li>
  <li className="flex hover:text-blue-800">
  <Link className="nav-link d-flex" to="/contact">
    <MdOutlineAddIcCall  size={20}/>Contact Us
    </Link>
  </li>
  <li className="flex hover:text-sky-800">
  <Link className="nav-link d-flex" to="/cart">
    <IoCartOutline size={20}/>Cart<sub>{cartItems.length}</sub>
    </Link>
  </li>
    <li className="flex hover:text-sky-800">
    <Link className="nav-link d-flex" to ="/instamart">
    <IoCartOutline size={20}/>Instamart
    </Link>
  </li>
</ul>

  </div>
</nav>

		</>
		);
};

export default Header;