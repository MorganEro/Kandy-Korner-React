import { Outlet, Route, Routes } from "react-router-dom"
import { EmpProductList } from "../inventory/EmpProductList"
import { LocationList } from "../locations/locationList"
import { AddProduct } from "../tickets/AddProducts"
export const EmployeeViews = () => {
	return (
	<Routes>

		<Route path="/" element= {
			<>
			<h1>Kandy Korner</h1>
			<div> Another GREAT day to work at Kandy Korner!!</div>
			
			<Outlet />
			
			</>
		} />
		<Route path="locationList" element={ <LocationList /> } />
		<Route path="empProductList" element={ <EmpProductList /> } />
		<Route path="addProduct" element={ <AddProduct /> } />
	</Routes>
	)
}