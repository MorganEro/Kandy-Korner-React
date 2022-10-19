import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/locationList"
import { ProductList } from "../inventory/Products"
import { EmpProductList } from "../inventory/EmpProductList"


export const ApplicationViews = () => {
	return (
	<Routes>

		<Route path="/" element= {
			<>
			<h1>Kandy Korner</h1>
			
			</>
		} />
		<Route path="locationList" element={ <LocationList /> } />
		<Route path="productList" element={ <ProductList /> } />
		<Route path="empProductList" element={ <EmpProductList /> } />
	</Routes>
	)
}

