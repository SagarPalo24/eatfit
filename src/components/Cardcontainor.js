import Restaurantcard from "./Restaurantcard";
import {useState,useEffect} from "react";
import Shimmar from "./shimmer";

const Cardcontainor =() =>{
    const [restaurantData,setRestaurantData] =useState([]);
    const [loading,setloading] =useState(true);
    const [searchText,setSearchText]=useState("");
    const [restaurantCollection,setRestaurantCollection] =useState([]);

const getRestaurats = async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setloading(false);
    console.log ("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const handleSearchText=(event)=>{
    setSearchText(event.target.value)
}

const filterData=()=>{
    const filterData = restaurantCollection.filter((restaurant)=>{
        return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setRestaurantData(filterData);
}

useEffect(()=>{
    getRestaurats();
},[])
    

if (loading){
    return(
    <div className="container grid grid-cols-5">
    <Shimmar/>
    </div>
    )
};
    return(
        <div>
            <div className="container">
                 <input type="text" className="custom_input" placeholder="Enter Name of Restaurant" value={searchText} onChange={handleSearchText}/>
                 <button onClick={filterData} className="btn btn-sm btn-light">🔍</button>
            </div>
            <div className="container grid grid-cols-5">
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
        </div>
    );
};
export default Cardcontainor;