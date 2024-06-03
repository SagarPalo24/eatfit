import Restaurantcard from "./Restaurantcard";
import {restaurantList} from "../const/config";
import {IMG_URL} from "../const/config";

const Cardcontainor =() =>{
	console.log ("restaurantList",restaurantList)
	const restaurants = restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
	
	return(
		<div className="container grid grid-cols-5">
        {
            restaurants.map((restaurant) =>{
                return(
                       <Restaurantcard
                        key={restaurant?.info.id}
                        {...restaurant?.info}
                       />
                    )
            })
        }
		</div>
		);
};

export default Cardcontainor;