import { MdAddLocationAlt } from "react-icons/md";
import {IMG_URL} from "../const/config";
import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Resturantcard =({cloudinaryImageId,name,avgRating,sla,cuisines,areaName,id})  =>{
	return(
		<Link to={`/menu/${id}`} className="custom-card mb-3 scale-100 text-decoration-none text-secondary ">
			<div className="mb-2 "> 
				<img src={IMG_URL+cloudinaryImageId}/>
			</div>
			<div className="px-2">
				<h4 className="resname">{name} </h4>
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