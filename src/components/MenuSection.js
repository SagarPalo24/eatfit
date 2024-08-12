import {IMG_URL} from "../const/config"

const MenuSection =({name,avgRating,ratingCount,costForTwo,isVeg,discription,imageUrl}) =>{
	return(
		<div className="d-flex justify-content-between container align-item-center p-4 gap-2">
			<div > 
				<p>{isVeg ? "🟢" : "🔴"}</p>
				<h6>{name}</h6>
				<p>Rs.{costForTwo}</p>
				{avgRating && <p  className="text-success">⭐{avgRating} <span className="text-secondary">({ratingCount})</span></p>}
				<p className="text-secondary">{ discription }</p>
			</div>
			<div >
				<img className= "img_res" src={IMG_URL+ imageUrl}/>
			</div>
		</div>
		
		);
};

export default MenuSection;