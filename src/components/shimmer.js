const shimmer = () =>{
	return (
		new Array(20).fill(0).map(()=>(
			<div className="custom-card mb-3 scale-100">
			<div className="mb-2"> 
				<div className="shimmerImg"></div>
			</div>
			<div className="px-2">
				<h4 className="shimmerLine"> </h4>
				<div className="d-flex mb-2 justify-content-between">
					<div className="shimmerLine2"></div>
					<div className="shimmerLine2"></div>
				</div>
				<div className="text-ellipsis shimmerLine mb-2"></div>
				<div className="shimmerLine mb-2" ></div>
			</div>
		</div>
		))
		)
}
export default shimmer