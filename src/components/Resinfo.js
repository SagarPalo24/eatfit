const Resinfo =({name,avgRating,ratingCount,costForTwo,cuisines,deliveryTime,distance,enrihedText}) =>{
	return(
		<div className="info_container p-2" > 
			<h1>{name}</h1>
			<p>⭐{avgRating}({ratingCount})-{costForTwo}</p>
			<p>{cuisines}</p>
			<p>⌛{deliveryTime}</p>
			<p>🗺{enrihedText.replace(/<\/?b>/g,"")}.</p>
		</div>
		);
};

export default Resinfo;