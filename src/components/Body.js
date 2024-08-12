import Carousel from"./Carousel"
import Cardcontainor from "./Cardcontainor"

const body =() =>{
	return(
		<>
		<div className="container mt-3">
		<h2>What's in Your Mind?</h2>
		<hr/>
		</div>
		<Carousel/>
		<div className ="d-flex justify-content-between">
		</div>
		<Cardcontainor/>
		</>
		);
};

export default body;