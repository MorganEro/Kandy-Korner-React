import "./Products.css"
import { useEffect, useState } from "react"

/*
goal: when emp click on Product Link, it takes them to a more detailed list than the users version

create module can component for empProductDetails
link it to nav bar for just emp
employee clicks products and it links to empProductDetails
module iterates through items and shows 
item show using query to to show the id's
*/
export const EmpProductList = () => {

    const [products, setProducts] = useState([])
    const [TopPricedProducts, setTopPricedProducts] = useState([])
    const [ toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8088/products?_expand=productType')
        .then((response) => response.json())
        .then((data) => { 
            setProducts(data)
            return(data)
        })
        .then((data) => {
            const filteredProducts = data.filter(data => data.price >= 2)
            setTopPricedProducts(filteredProducts)
            return(filteredProducts)
            }
        )
    }, []
    )

    return (
        <>
        
            <div className="items-container">
                <h2>List Of Products</h2>
                <div className="price-buttons">      
                    <button onClick={() => setToggle(true)} className="topPriced">Top Priced</button>
                    <button onClick={() => setToggle(false)} className="allInventory"> All Products </button>         
                </div>
                <>
                    {toggle === false
                    ? 
                    <>
                    {products.map((productObj) => {
                    return (
                        <ul className="emp-product-item"  key={productObj.id}>
                             <li>Product Name: {productObj.name}</li>
                            <li>Price per unit: ${productObj.price}</li>
                            <li>Price Type: {productObj.productType.category}</li>
                        </ul>
                        )
                    })}
                    </>
                    : 
                    <>
                    {TopPricedProducts.map((productObj) => {
                    return (
                        <ul className="emp-product-item"  key={productObj.id}>
                            <li>Product Name: {productObj.name}</li>
                            <li>Price per unit: ${productObj.price}</li>
                            <li>Price Type: {productObj.productType.category}</li>
                        </ul>
                        )
                    })}
                    </>
                    }
                </>
            </div>
        </>       
    )



} 
