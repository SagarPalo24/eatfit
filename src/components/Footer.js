import { SiIfood } from "react-icons/si";
import { MdAddLocationAlt } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
const footer =() =>{
	return(
   <div className="footer">
   <div className="container text-light" >
    <img className="icon" src="https://5.imimg.com/data5/SELLER/Default/2021/6/OJ/KJ/YX/6767130/smart-restaurant-software-500x500.png" width="100px"/>
    <h3 className="font-bold text-size-30px ">Smart Restaurant</h3>
    <p>Designed for Quality</p>
    </div>
    <div className="p-3 text-light container "> 
    
< div className="d-flex justify-center gap-3 ">
< FaInstagramSquare fontSize={50}/>
<BsWhatsapp fontSize={50}/>
< AiOutlineFacebook fontSize={50} />
< FaGithub fontSize={50} />
</div>
    </div>
    </div>
		)
}

export default footer;