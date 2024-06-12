import { SiIfood } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import { MdHelpCenter } from "react-icons/md";
const header =() =>{
	return(
		<>
		<nav className="navbar  navbar-light bg-light shadow-xl  ">
  <div className="container header">
    <div className="icon">🍔</div>
   	<ul className=" bar flex gap-6 font-bold mr-10">
  <li className="flex  ">
    🏠Home
  </li>
  <li className="flex">
    🤙About
  </li>
  <li className="flex">
    📞Contact Us
  </li>
  <li className="flex">
    🛒Cart
  </li>
</ul>

  </div>
</nav>

		</>
		);
};

export default header;