import { useParams } from "react-router-dom"
import { useState,useEffect }from "react"
import Resinfo from "./Resinfo"
import Shimmar from "./shimmer"
import MenuSection from "./MenuSection"
import useMenu from "../hooks/useMenu"

const Menu=() => {
	const {id} = useParams();
	const menuList=useMenu(id);
	console.log("custome hook",menuList);

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
			{
				normalMenu.map((normalCategory)=>{
					return(
					<div>
						<h5>{normalCategory?.card?.card?.title}</h5>
						{
							normalCategory?.card?.card?.itemCards?.map((dish)=>{
								return(
								<div>
									<MenuSection 
									 isVeg={dish?.card?.info?.isVeg}
								     name={dish?.card?.info?.name}
									 costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
									 avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
									 ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
									 discription={dish?.card?.info?.description}
									 imageUrl={dish?.card?.info?.imageId}
								    />
								    <hr/>
								</div>
								)
							})
						}
					</div>
					)
				})
			}
		</div>
		<div>
			{
				nestedMenu.map((nestedCategory)=>{
					return(
					<div>
						<h3>{nestedCategory?.card?.card?.title}</h3>
						{
							nestedCategory?.card?.card?.categories.map((subCategory)=>{
								return(
								<div>
									<h5>{subCategory?.title}</h5>
									{
										subCategory?.itemCards.map((dish)=>{
											return(
												<div>
													<MenuSection 
														 isVeg={dish?.card?.info?.isVeg}
													     name={dish?.card?.info?.name}
														 costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
														 avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
														 ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
														 discription={dish?.card?.info?.description}
														 imageUrl={dish?.card?.info?.imageId}
												    />
												    <hr/>
												</div>
											)
										})
									}
								</div>
								)
							})
						}
					</div>
					)
				})
			}
		</div>
	</div>
	)

}

export default Menu;