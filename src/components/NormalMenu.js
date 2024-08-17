import MenuSection from "./MenuSection"
import { useState }from "react"
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"
import { IoIosArrowDown } from "react-icons/io";

const NormalMenu =({normalCollection,isActive,toggleFunction, isNested})=>{
	const [ showList,setShowList] =useState(false)
	const dispatch =useDispatch()
	const handleAddItem=(val)=>{
		dispatch(addItem(val))
	}
	return(
		  <div>
		  <div className="d-flex  justify-between ">
		  <h6 >
			{isNested ? normalCollection?.title : normalCollection?.card?.card?.title}
			</h6>
		   <IoIosArrowDown className="text-2xl" onClick={isNested ? ()=>{setShowList(!showList)} :toggleFunction}/>
		  </div>
			{isNested ?normalCollection?.itemCards?.map((dish)=>{
				return(
					 showList &&<div>
						<MenuSection 
							isVeg={dish?.card?.info?.isVeg}
						    name={dish?.card?.info?.name}
						    costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
							avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
							ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
							discription={dish?.card?.info?.description}
						    imageUrl={dish?.card?.info?.imageId}
						    handleAdd={()=>handleAddItem(dish?.card?.info)}
						/>
					  <hr/>
		            </div>
					)
			})
			:
			normalCollection?.card?.card?.itemCards?.map((dish)=>{
				return(
					 isActive &&<div>
						<MenuSection 
							isVeg={dish?.card?.info?.isVeg}
						    name={dish?.card?.info?.name}
						    no= {dish?.card?.info?.name.length}
						    costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
							avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
							ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
							discription={dish?.card?.info?.description}
						    imageUrl={dish?.card?.info?.imageId}
						    handleAdd={()=>handleAddItem(dish?.card?.info)}
						/>
					  <hr/>
		            </div>
					)
			})
			}
		</div>								
					)
}
export default NormalMenu