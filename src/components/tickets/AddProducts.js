import "./AddProducts.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



export const AddProduct = ({setProducts}) => {
   
    const navigate = useNavigate()
    const [productTypes, setProductTypes]= useState([])
    const [newProducts, setNewProducts] = useState({
        name:"",
        productTypeId: 0,
        price: 0
    })

    useEffect(() => {
        fetch('http://localhost:8088/productTypes')
        .then((response) => response.json())
        .then((data) => { 
            setProductTypes(data)
        })    
    }, []
    )
    const handleSaveNewProduct =(event)=>{
        event.preventDefault()
        if (newProducts.name && newProducts.price && newProducts.productTypeId){
            fetch('http://localhost:8088/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProducts)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/empProductList")
        })
        } else {
            alert("Please Complete All Fields.")
        }
        
    }

    return (
        <form className="addProduct-form">
            <h2 className="addProduct-from-title"> Add A New Product</h2>
            <fieldset>
                <div className="from-stuff">
                    <label htmlFor="name">Name: </label>
                    <input required id="name" type="text" className="form-input"
                    placeholder="input name" 
                    onChange={(event) => {
                      const copy = {...newProducts} 
                      copy.name = (event.target.value)
                      setNewProducts(copy)
                    }}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="from-stuff">
                    <div>ProductTypes: </div> 
                    {productTypes.map( productTypeObj => {
                            return  (
                                <div key={productTypeObj.id} className="radio">
                                    <label>
                                    <input 
                                    type="radio" 
                                    value={productTypeObj.id}
                                    checked ={newProducts.productTypeId === productTypeObj.id}
                                    onChange={(event)=> {
                                        const copy = { ...newProducts}
                                        copy.productTypeId = parseInt(event.target.value)
                                        setNewProducts(copy)
                                    }}
                                    />
                                        {productTypeObj.category}
                                        
                                    </label>
                                </div>
                            )
                        })}
                </div>
            </fieldset>
            <fieldset>
                <div className="from-stuff">
                    <label htmlFor="price">Price: </label>
                    <input required id="price" type="text" className="form-input" 
                    placeholder="0.00"
                    onChange={(event) => {
                        const copy = {...newProducts} 
                        copy.price = (event.target.value)
                        setNewProducts(copy)
                      }}/>
                </div>
            </fieldset>
            <button className="btn" onClick={(event) => {handleSaveNewProduct(event)}}>Add To inventory</button>
        </form>
    )



} 