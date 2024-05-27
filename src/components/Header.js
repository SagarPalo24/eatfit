import { SiIfood } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import { MdHelpCenter } from "react-icons/md";
const header =() =>{
	return(
		<>
		<nav className="navbar navbar-expand-sm sticky navbar-light bg-light shadow-xl  ">
  <div className="container-fluid ">
    <i className="font-bold ml-4">
   <SiIfood fontSize={80} />
   FKK</i>
   	<ul className=" bar flex gap-8 font-bold mr-8">
    <li className="flex">
    🔍Search
  </li>
  <li className="flex  ">
    🏠Home
  </li>
  <li className="flex">
    📞Contact Us
  </li>
  <li className="flex">
    🛒Cart
  </li>
  <li className="flex">
    🤙Help
  </li>
</ul>

  </div>
</nav>

		</>
		);
};

export default header;