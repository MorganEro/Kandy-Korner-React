import "./Products.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmpProductList = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [TopPricedProducts, setTopPricedProducts] = useState([])
    const [ toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8088/products?_sort=name&_expand=productType')
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
                    <button onClick={() => navigate("/addProduct")} className="newProduct"> Add Product</button>         
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
