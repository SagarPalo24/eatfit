import { FaStar } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Resinfo =({name,avgRating,ratingCount,costForTwo,cuisines,deliveryTime,distance,enrihedText}) =>{
	return(
		<div>
		<h3 className="font-semibold  pt-6 text-2xl">{name}</h3>
		<div className="w-full h-[206px] bg-gradient-to-t from-slate-200/100 p-2.5 rounded-[30px]">
		<div className="w-full h-full p-4 border border-slate-200/100 rounded-[30px] bg-white " >
		<p className="d-flex"><FaStar color="green"/>{avgRating}({ratingCount})-{costForTwo}</p>
			<p className="d-flex underline font-semibold text-orange-600"><MdOutlineTimer/>{cuisines}</p>
			<p className="d-flex"><CiViewList/>{deliveryTime}</p>
			<p className="d-flex"><CiLocationOn color="red" size="20px"/>{enrihedText.replace(/<\/?b>/g,"")}.</p>
		</div>
		</div>
		</div>
		);
};

export default Resinfo;