import { SiIfood } from "react-icons/si";
import { MdAddLocationAlt } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
const footer =() =>{
	return(
		<div className="p-3 bg-dark text-light"> 
		<SiIfood fontSize={50} /> 
		<p>FOODIES KA KHAZANA </p>
		<MdAddLocationAlt />
		<span> Ghatkopar(East)</span>
		<p>Mumbai-4000075</p>
		< div className="flex">
		<ul className="  bg-dark">
	<MdAddLocationAlt />
  <li>Thane</li>
  <li >Mumbai</li>
  <li >Nashik</li>
  <li >Pune</li>
</ul>

<ul className="  bg-dark">
<MdAddLocationAlt />
  <li >Kannur</li>
  <li >Kollam</li>
  <li >]Kochi</li>
  <li >Kozhikode</li>
</ul>

<ul className="  bg-dark">
<MdAddLocationAlt />
  <li >Bhubaneshwar</li>
  <li >Puri</li>
  <li >Samblapur</li>
  <li >Cuttack</li>
</ul>

<ul className="  bg-dark">
<MdAddLocationAlt />
  <li >Ahmedabad</li>
  <li >Surat</li>
  <li >Vadodara</li>
  <li >Rajkot</li>
</ul>
</div>
< div className="flex justify-center p-3 mg-10">
< FaInstagramSquare fontSize={50}/>
<BsWhatsapp fontSize={50}/>
< AiOutlineFacebook fontSize={50} />
< FaGithub fontSize={50} />
</div>
		</div>
		)
}

export default footer;