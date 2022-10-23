import "./Products.css"
import { useEffect, useState } from "react"

export const ProductList = ({ searchTermState }) => {
    const [filteredProducts, setFiltered] = useState([])
    const [products, setProducts] = useState([])
  

    useEffect(() => {
        fetch('http://localhost:8088/products')
        .then((response) => response.json())
        .then((data) => { 
            setProducts(data)
        })
    }, []
    )
    useEffect(
        ()=>{
            const searchProducts = products.filter(product => {
                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchProducts)
        }, [ searchTermState ]
    )
    

   

    return (
    <>
   
        <div className="items-container">
            <h2> List of Products</h2>
           
            <article className="products">
            {
               products.map(
                (product) => {
                    return(
                    <section 
                    key= {product.id}  
                    className="product-item">
                        <header>{product.name}</header>
                        <div> ${product.price} </div>
                    </section>)
                }
                )
                 
            }
            </article>
        </div>  
       
    </>
    )
} 