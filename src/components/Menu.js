import { useParams } from "react-router-dom"
import { useState }from "react"
import Resinfo from "./Resinfo"
import Shimmar from "./shimmer"
import useMenu from "../hooks/useMenu"
import NormalMenu from "./NormalMenu"
import NestedMenu from "./NestedMenu"

const Menu=() => {
	const {id} = useParams();
	const menuList=useMenu(id);
	console.log("custome hook",menuList);
	const [activeIndex,setActiveIndex]= useState(0)

	if (menuList.length===0){
    return(
    <div className="container grid grid-cols-4 ">
    <Shimmar/>
    </div>
    )
};

	const menuCategories = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

	const normalMenu =menuCategories.filter((menuCategory)=>{
		return(
			menuCategory?.card?.card["@type"] ===
			"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		)
	});
	const nestedMenu = menuCategories.filter((menuCategory)=>{
		return(
			menuCategory?.card?.card["@type"] ===
			"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
		)
	})

	console.log("normalMenu",normalMenu);
	console.log("nestedMenu",nestedMenu);


	const{ name, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, expectationNotifiers }= menuList[2]?.card?.card?.info
	const{ slaString  }= sla;
	const{ enrichedText }= expectationNotifiers[0];

	const showDetails= (val)=>{
			if(activeIndex===val){
			                   setActiveIndex(-1)
			                   }
			else{
			setActiveIndex(val);
				}
	}
	return(
	<div className="menu_container p-3">
	  <div>
	  <Resinfo
	  name ={name}
	  avgRating ={avgRating}
	  ratingCount ={totalRatingsString}
	  costForTwo ={costForTwoMessage}
	  cuisines ={cuisines.join(", ")}
	  deliveryTime={slaString}
	  enrihedText={enrichedText}/>
	  </div>
		<div className="p-3">
			{normalMenu.map((normalCategory,index)=>{
					return(
						<NormalMenu normalCollection={normalCategory} isActive={activeIndex===index}
						toggleFunction={()=>showDetails(index)}/>
					)
				})
			}
		</div>
		<div>
			{nestedMenu.map((nestedCategory)=>{
					return(
					<NestedMenu category={nestedCategory}/>
					)
				})
			}
		</div>
	</div>
	)

}

export default Menu;