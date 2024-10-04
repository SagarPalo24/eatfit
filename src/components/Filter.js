import { FaStar } from "react-icons/fa";
const Filter =({collection,updater}) =>{
	const topRating=()=>{
    const topRating = collection.filter((restaurant)=>{
        return restaurant?.info?.avgRating>=4.5
    })
    updater(topRating);
}

const fastDelivery=()=>{
    const filterData = collection.filter((restaurant)=>{
        return restaurant?.info?.sla?.deliveryTime <=30
    })
    updater(filterData);
}

const pureVeg=()=>{
    const filterData = collection.filter((restaurant)=>{
        return restaurant?.info.veg
    })
    updater(filterData);
}
const reset=()=>{
	updater(collection)
}

	return(
		<div className="container  d-flex gap-3 text-black rounded-lg">
            <button type="button" className="btn btn-outline-success d-flex  "onClick={topRating}  ><FaStar color="yellow"/>Top Rating</button>
            <button type="button" className="btn btn-outline-success  "onClick={fastDelivery} >Fast Delivery</button>
            <button type="button" className="btn btn-outline-success "onClick={pureVeg} >Pure Veg</button>
            <button type="button" className="btn btn-outline-warning " onClick={reset} >Reset</button>
        </div>
		);
};

export default Filter;