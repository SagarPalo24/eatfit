import Restaurantcard from "./Restaurantcard";
import {restaurantList} from "../const/config";
import {IMG_URL} from "../const/config";
import {useState,useEffect} from "react";

const Cardcontainor =() =>{
    const [restaurantData,setRestaurantData] =useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log ("restaurantList",restaurantList)

// setRestaurantData (restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

const filterRestaurants =()=>{
    const restaurants= restaurantData.filter((restaurant)=>{
        return(
            restaurant?.info?.avgRating>= 4.5
            )
    })
    setRestaurantData(restaurants);
}

return(
<div className="container grid grid-cols-5">
    <button onClick={filterRestaurants}> Top rated restaurant</button>
    {
    restaurantData.map((restaurant) =>{
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