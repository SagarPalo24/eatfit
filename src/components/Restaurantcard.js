import { MdAddLocationAlt } from "react-icons/md";

const Resturantcard =({imgUrl,name,avgRating,deliveryTime,cuisines,areaName})  =>{
	return(
		<div className="custom-card mb-3 scale-100">
			<div className="mb-2"> 
				<img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg"/>
			</div>
			<div className="px-2">
				<h4>{name} </h4>
				<div className="d-flex justify-content-between">
					<div>⭐{avgRating}</div>
					<div>⌛{deliveryTime}</div>
				</div>
				<div className="text-ellipsis overflow-hidden gap-1">📃{cuisines}</div>
				<div className="d-flex font-bold" >📌{areaName}</div>
			</div>
		</div>
		);
};

export default Resturantcard ;