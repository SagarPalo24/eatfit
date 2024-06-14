import { MdAddLocationAlt } from "react-icons/md";
import {IMG_URL} from "../const/config";

const Resturantcard =({cloudinaryImageId,name,avgRating,sla,cuisines,areaName})  =>{
	return(
		<div className="custom-card mb-3 scale-100 ">
			<div className="mb-2 hover:shadow-blue-500/100"> 
				<img src={IMG_URL+cloudinaryImageId}/>
			</div>
			<div className="px-2">
				<h4 className="name">{name} </h4>
				<div className="d-flex justify-content-between">
					<div>⭐{avgRating}</div>
					<div>⌛{sla?.deliveryTime}</div>
				</div>
				<div className="cuisines gap-1">📃{cuisines.join(", ")}</div>
				<div className="location  font-semibold" >📌{areaName}</div>
			</div>
		</div>
		);
};

export default Resturantcard ;