import { useState,useEffect }from "react"

const useRestaurant =()=>{
    const [restaurantData,setRestaurantData]=useState([]);
    const [restaurantCollection,setRestaurantCollection]=useState([]);
    const [loading,setloading] =useState(true);
    const [isFailed,setIsFailed] = useState(false);
	useEffect(()=>{
    const getRestaurats = async()=>{
    try{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setloading(false);
        setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
    catch(err){
        setloading(false);
        setIsFailed(true);
        console.log("Somthing went wrong",err)
    }
}
    getRestaurats();
},[])
	const resObject={
		resData:restaurantData,
		masterData:restaurantCollection,
		loading:loading,
		failed:isFailed,
        updater:setRestaurantData
	}

	return resObject;
};

export default useRestaurant;