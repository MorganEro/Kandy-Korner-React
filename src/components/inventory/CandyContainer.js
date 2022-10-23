import { useState } from "react"
import { CandySearch } from "./CandySearch"
import { FoundCandy } from "./FoundCandy"


export const CandyContainer =() => {

    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <CandySearch setterFunction={setSearchTerms}/>
		<FoundCandy searchTermState={searchTerms}/> 
    </>
}