import "./Products.css"
import { useEffect, useState } from "react"
import { AddProduct } from "../tickets/AddProducts"

export const ProductList = () => {
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const [products, setProducts] = useState([])
    const [TopPricedProducts, setTopPricedProducts] = useState([])
    const [ toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8088/products')
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
        <AddProduct setProducts={setProducts}/>
            <div className="items-container">
                <h2>List Of Products</h2>
                <div className="price-buttons">
                    <>
                        {
                            kandyUserObject.staff 
                            ? <>
                                <button onClick={() => setToggle(true)} className="topPriced">Top Priced</button>
                                <button onClick={() => setToggle(false)} className="allInventory"> All Products </button>

                            </>
                            : ""
                        }
                    </>  
                </div>
                <>
                    {toggle === false
                    ? 
                    <>
                    {products.map((productObj) => {
                    return (
                        <ul className="product-item"  key={productObj.id}>
                            <li>{productObj.name}</li>
                            <li>${productObj.price}</li>
                        </ul>
                        )
                    })}
                    </>
                    : 
                    <>
                    {TopPricedProducts.map((productObj) => {
                    return (
                        <ul className="product-item"  key={productObj.id}>
                            <li>{productObj.name}</li>
                            <li>${productObj.price}</li>
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