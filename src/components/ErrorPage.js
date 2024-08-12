import { useRouteError } from "react-router-dom"

	const ErrorPage = () => {
		const errorDetails= useRouteError ();
		console.log("errorDetails",errorDetails)
	return (
		<div className="d-flex justify-content-center align-item-center">
			OOPS something went wrong
			<h1>
			Error {errorDetails?.status}({errorDetails?.statusText})
			</h1>
			<h2>
			{errorDetails?.data}
			</h2>
		</div>
		)
	}
export default ErrorPage;