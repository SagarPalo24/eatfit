import Restaurantcard from "./Restaurantcard";
import {useState,useEffect} from "react";
import Shimmar from "./shimmer";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import useRestaurant from "../hooks/useRestaurant";
import Searchbar from "./Searchbar";
import Filter from "./Filter"

const Cardcontainor =() =>{
    const [restaurantData,setRestaurantData] =useState([]);
    const [restaurantCollection,setRestaurantCollection] =useState([]);
    const resObject=useRestaurant();
    console.log("resobject",resObject);


if (resObject.loading){
    return(
    <div className="container grid grid-cols-4 ">
    <Shimmar/>
    </div>
    )
};

if (resObject.isFailed){
    return(
            <div><h1>Somthing went Wrong</h1></div>
    )
}

    return(
        <div>
            <div className="flex container gap-20">
            <Searchbar collection={resObject.masterData} updater={resObject.updater}/>
            <Filter collection={resObject.masterData} updater={resObject.updater} />
            </div>
            <hr className="container"/>
            <div className="container grid grid-cols-4">
                {
                    resObject?.resData.length !==0?resObject?.resData.map((restaurant) => {
                    return(
                    <Restaurantcard
                    key={restaurant?.info.id}
                    {...restaurant?.info}
                    />
                    )
                    })
                    : <h1>No restaurant match your search</h1>
                }
            </div>
        </div>
    );
};
export default Cardcontainor;