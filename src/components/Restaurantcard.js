import { MdAddLocationAlt } from "react-icons/md";
import {IMG_URL} from "../const/config";
import {Link} from "react-router-dom"

const Resturantcard =({cloudinaryImageId,name,avgRating,sla,cuisines,areaName,id})  =>{
	return(
		<Link to={`/menu/${id}`} className="custom-card mb-3 scale-100 text-decoration-none text-secondary ">
			<div className="mb-2 hover:shadow-blue-500/100"> 
				<img src={IMG_URL+cloudinaryImageId}/>
			</div>
			<div className="px-2">
				<h4 className="resname">{name} </h4>
				<div className="d-flex justify-content-between">
					<div>⭐{avgRating}</div>
					<div>⌛{sla?.deliveryTime}</div>
				</div>
				<div className="rescuisines gap-1">📃{cuisines.join(", ")}</div>
				<div className="location  font-semibold" >📌{areaName}</div>
			</div>
		</Link>
		);
};

export default Resturantcard ;