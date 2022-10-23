import { Outlet, Route, Routes } from "react-router-dom"
import { CandyContainer } from "../inventory/CandyContainer"
import { ProductList } from "../inventory/ProductList"
import { LocationList } from "../locations/locationList"


export const CustomerViews = () => {
	return (
	<Routes>

		<Route path="/" element= {
			<>
			<h1>Kandy Korner</h1>
			<div>Hello Kandy customer! Hope you are having a wonderful day. Great news! It's about to get even sweater!! </div>

			<Outlet />

			</>
		} />
		<Route path="locationList" element={ <LocationList /> } />
		<Route path="productList" element={ <ProductList /> } />
		<Route path="candySearch" element={ <CandyContainer /> } />
	</Routes>
	)
}