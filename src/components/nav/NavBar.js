import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)


    return (
        <ul className="navbar">
            <li className="navbar__item navbar__Home">
                <Link className="navbar__link" to="/" 
            >Home</Link>
            </li>
            <li className="navbar__item navbar__products">
                <>
                {
                            kandyUserObject.staff 
                            ? <Link className="navbar__link" to="/empProductList" 
                            >Products</Link>
                            : <Link className="navbar__link" to="/productList" 
                            >Products</Link>
                        }  
                </>
            </li>
            <li className="navbar__item navbar__locations">
                <Link className="navbar__link" to="/locationList" 
            >Locations</Link>
            </li>
            {
                localStorage.getItem("kandy_user")
                ? <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
            : ""
            }
        </ul>
    )
}

