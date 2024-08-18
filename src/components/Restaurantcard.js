import { MdAddLocationAlt } from "react-icons/md";
import {IMG_URL} from "../const/config";
import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Resturantcard =({cloudinaryImageId,name,avgRating,sla,cuisines,areaName,id,aggregatedDiscountInfoV3})  =>{
	return(
		<Link to={`/menu/${id}`} className="custom-card mb-3 scale-100 text-decoration-none text-secondary ">
			<div className="mb-2 hover:shadow-blue-500/100"> 
				<img  className="bg-gradient-to-t from-black  from-4% to-transparent to-40% border-2xl " src={IMG_URL+cloudinaryImageId}/>
				<div className="absolute bottom-40 ml-3 mt-100 text-white text-xl font-bold">{aggregatedDiscountInfoV3?.header + aggregatedDiscountInfoV3?.subHeader}</div>
				
			</div>
			<div className="px-2">
				<div className="resname font-semibold text-[1.5xl] text-black">{name} </div>
				<div className="d-flex justify-content-between">
					<div className="flex"><FaStar color="yellow"/>{avgRating}</div>
					<div className="flex"><MdOutlineTimer />{sla?.deliveryTime}</div>
				</div>
				< div className="d-flex"><CiViewList />
				<div className="rescuisines gap-1">{cuisines.join(", ")}</div>
				</div>
				<div className="d-flex location  font-semibold" ><CiLocationOn color="red"/>{areaName}</div>
			</div>
		</Link>
		);
};

export default Resturantcard ;