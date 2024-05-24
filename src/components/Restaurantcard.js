import { MdAddLocationAlt } from "react-icons/md";

const Resturantcard =() =>{
	return(
		<div className="custom-card mb-3 scale-100">
		<div className="mb-2"> 
		<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e2ej0ob56z47oylq9mkb"				
			/>
		</div>
		<div className="px-2">
		<h4>Chinese Wok </h4>
		<div className="d-flex justify-content-between">
			<div>⭐4.5</div>
			<div>30-40min</div>
		</div>
		<div>Chinese,Asian,Tibetan,Desert</div>
		<div className="d-flex" >
		<MdAddLocationAlt />
		Dadar west
		</div>

		</div>
		
		</div>
		);
};

export default Resturantcard ;