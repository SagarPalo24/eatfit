import Restaurantcard from "./Restaurantcard";
import {useState,useEffect} from "react";
import Shimmar from "./shimmer";
import { IoSearchOutline } from "react-icons/io5";

const Cardcontainor =() =>{
    const [restaurantData,setRestaurantData] =useState([]);
    const [loading,setloading] =useState(true);
    const [searchText,setSearchText]=useState("");
    const [restaurantCollection,setRestaurantCollection] =useState([]);
const getRestaurats = async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setloading(false);
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

const topRating=()=>{
    const topRating = restaurantCollection.filter((restaurant)=>{
        return restaurant?.info?.avgRating>=4.5
    })
    setRestaurantData(topRating);
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
    return(
        <div>
            <div className="flex container">
            <div className=' container relative flex items-center text-gray-400 focus-within:text-gray-600'>
      <button className='flex items-center' onClick={filterData}><IoSearchOutline className='w-5 h-5 absolute ml-3'/></button>
       <input type="text" placeholder='Enter Name of Restaurant'className='pr-4 pl-10 py-1 font-semibold placeholder-gray-400 w-[70%] text-black rounded-2xl border-none ring-1 ring-gray-400 focus:ring-2'value={searchText} onChange={handleSearchText} onClick={filterData} />
      </div>
            <div className=" container filters d-flex flex-row-reverse gap-1 ">
              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-danger" onClick={topRating}  onDoubleClick={filterData} >⭐Top Rating</button>
            </div>
            </div>
            <hr className="container"/>
            <div className="container grid grid-cols-4">
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