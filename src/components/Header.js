import { MdOutlineAddHome } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


const header =() =>{
	return(
		<>
		<nav className="navbar navbar-light bg-light shadow-xl  ">
  <div className="container header">
    <div >
    <img className="icon" src="https://5.imimg.com/data5/SELLER/Default/2021/6/OJ/KJ/YX/6767130/smart-restaurant-software-500x500.png" width="100px"/>
    </div>
   	<ul className=" bar d-flex gap-6 font-semibold  hover:text-blue">
  <li className="flex gap-1 hover:text-sky-800" >
    <MdOutlineAddHome size={20}/>Home 
  </li>

  <li className="flex hover:text-sky-800">
    < IoIosContact size={20}/> About
  </li>
  <li className="flex hover:text-blue-800">
    <MdOutlineAddIcCall size={20}/>Contact Us
  </li>
  <li className="flex hover:text-sky-800">
    <IoCartOutline size={20}/>Cart<sub>0</sub>
  </li>
</ul>

  </div>
</nav>

		</>
		);
};

export default header;