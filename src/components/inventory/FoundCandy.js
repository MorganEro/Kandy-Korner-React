import "./Products.css"
import { useEffect, useState } from "react"

export const FoundCandy = ({ searchTermState }) => {
    const [filteredProducts, setFiltered] = useState([])
    const [products, setProducts] = useState([])
  

    useEffect(
        ()=>{
            const searchedProducts = products.filter(product => {
                if(
                    product.name.toLowerCase().startsWith(searchTermState.toLowerCase()) && searchTermState.replace(" ", "") !== ""
                ){
                    return true 
                }    
            })
            setFiltered(searchedProducts)
        },[ searchTermState ]    
    )

    useEffect(() => {
        fetch('http://localhost:8088/products')
        .then((response) => response.json())
        .then((data) => { 
            setProducts(data)
        })
    }, []

    )
 /* 
 if (it flies)
  {then return true}
 */
    

   

    return (
    <>
   
        <div className="items-container">
            <h2> List of Products</h2>
           
            <article className="products">
            {
               filteredProducts.map(
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