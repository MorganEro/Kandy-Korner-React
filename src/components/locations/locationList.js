import { useState, useEffect } from "react"
import "./locationList.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/locations')
        .then((response) => response.json())
        .then((data) => { 
            setLocations(data)
        })
    }, []
    )
    
	return (        
        <div className="items-container">
        <h2>List Of locations</h2>
        {locations.map((locationObj) => {
            return (
                <ul className="location-item"  key={locationObj.id}>
                    <li>Location: {locationObj.address}</li>
                    <li>{locationObj.sqFt} Square Foot Facility</li>
                </ul>
                )
        })}
        </div>
    )
}
