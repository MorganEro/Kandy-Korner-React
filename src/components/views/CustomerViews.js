import { Outlet, Route, Routes } from "react-router-dom"
import { ProductList } from "../inventory/Products"
import { LocationList } from "../locations/locationList"

export const CostumerViews = () => {
	return (
	<Routes>

		<Route path="/" element= {
			<>
			<h1>Kandy Korner</h1>
			
			</>
		} />
		<Route path="locationList" element={ <LocationList /> } />
		<Route path="productList" element={ <ProductList /> } />

	</Routes>
	)
}