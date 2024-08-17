import {IMG_URL} from "../const/config"
import { IoMdRadioButtonOn } from "react-icons/io";
const MenuSection =({no,name,avgRating,ratingCount,costForTwo,isVeg,discription,imageUrl,handleAdd}) =>{
	return(
		<div className="d-flex justify-content-between container align-item-center p-4 gap-2 h-[200px]">
			<div className="w-[60%]"> 
			<div className="flex">
				<p>{isVeg ? <IoMdRadioButtonOn  color="green"/>: <IoMdRadioButtonOn  color="red" /> }</p>
				<h6>{name}({no})</h6>
				</div>
				<p>Rs.{costForTwo}</p>
				{avgRating && <p  className="text-success">⭐{avgRating} <span className="text-secondary">({ratingCount})</span></p>}
				<p className="text-secondary">{ discription }</p>
			</div>
			<div className="relative h-full w-[20%]" >
				<img className= "img_res" src={IMG_URL+ imageUrl}/>
				<button className="bg-white rounded-xl absolute bottom-[-20px] left-5 text-lg text-green-700 font-bold px-4 py-2 drop-shadow" onClick={handleAdd}>ADD</button>
			</div>
		</div>
		
		);
};

export default MenuSection;