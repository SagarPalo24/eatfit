import Restaurantcard from "./Restaurantcard";
import {useState,useEffect} from "react";
import Shimmar from "./shimmer";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Cardcontainor =() =>{
    const [restaurantData,setRestaurantData] =useState([]);
    const [loading,setloading] =useState(true);
    const [searchText,setSearchText]=useState("");
    const [restaurantCollection,setRestaurantCollection] =useState([]);
    const [isFailed,setisFailed] =useState(false);


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
        setisFailed(true);
        console.log("Somthing went wrong",err)
    }
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

const topRating=()=>{
    const topRating = restaurantCollection.filter((restaurant)=>{
        return restaurant?.info?.avgRating>=4.5
    })
    setRestaurantData(topRating);
}

const fastDelivery=()=>{
    const filterData = restaurantCollection.filter((restaurant)=>{
        return restaurant?.info?.sla?.deliveryTime <=30
    })
    setRestaurantData(filterData);
}

const pureVeg=()=>{
    const filterData = restaurantCollection.filter((restaurant)=>{
        return restaurant?.info.veg
    })
    setRestaurantData(filterData);
}

useEffect(()=>{
    getRestaurats();
},[])
    

if (loading){
    return(
    <div className="container grid grid-cols-4 ">
    <Shimmar/>
    </div>
    )
};

if (isFailed){
    return(
            <div><h1>Somthing went Wrong</h1></div>
    )
}
    return(
        <div>
            <div className="flex container">
            <div className=' container relative flex items-center text-gray-400 focus-within:text-gray-600'>
      <button className='flex items-center' onClick={filterData}><IoSearchOutline className='w-5 h-5 absolute ml-3'/></button>
       <input type="text" placeholder='Enter Name of Restaurant'className='pl-10 py-2 font-semibold placeholder-gray-400 w-[80%] text-black rounded-2xl border-none ring-1 ring-gray-400 focus:ring-2'value={searchText} onChange={handleSearchText} onClick={filterData} />
      </div>
            <div className="d-flex gap-3 text-black">
            <button type="button" className="btn btn-outline-success "onClick={topRating} onDoubleClick={filterData} >⭐Top Rating</button>
            <button type="button" className="btn btn-outline-success "onClick={fastDelivery} >Fast Delivery</button>
            <button type="button" className="btn btn-outline-success "onClick={pureVeg} >Pure Veg</button>
            <button type="button" className="btn btn-outline-success " >Rs.200-Rs.400</button>
            <button type="button" className="btn btn-outline-warning "onClick={filterData} >Reset</button>
            </div>
            </div>
            <hr className="container"/>
            <div className="container grid grid-cols-4">
                {
                    restaurantData.length !==0?restaurantData.map((restaurant) => {
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