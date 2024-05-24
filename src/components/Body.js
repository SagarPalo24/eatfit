import Carousel from"./Carousel"
import Filter from "./Filter"
import Searchbar from "./Searchbar"
import Cardcontainor from "./Cardcontainor"

const body =() =>{
	return(
		<>
		<div className="text-center">this is body component</div>
		<Carousel/>
		<div className ="d-flex justify-content-between">
		<Filter/>
		<Searchbar/>
		</div>
		<Cardcontainor/>
		</>
		);
};

export default body;