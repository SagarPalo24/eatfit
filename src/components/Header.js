import { SiIfood } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import { MdHelpCenter } from "react-icons/md";
const header =() =>{
	return(
		<>
		<nav className="navbar navbar-expand-sm sticky navbar-light bg-light shadow-xl">
  <div className="container-fluid">
    <i>
   <SiIfood fontSize={50} />
   FKK</i>
   	<ul className="nav ">
  <li className="nav-item ">
    <a className="nav-link inline" href="#">
    <IoHome />
    Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
    <FcContacts/>
    Contact Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
 <CiShoppingCart/>
    Cart</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="#">
 <MdHelpCenter/>
    Help</a>
  </li>
</ul>

  </div>
</nav>

		</>
		);
};

export default header;