import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/locationList"


export const ApplicationViews = () => {
	return (
	<Routes>

		<Route path="/" element= {
			<>
			<h1>Kandy Korner</h1>
			</>
		} />
		<Route path="locationList" element={ <LocationList /> } />
	</Routes>
	)
}

