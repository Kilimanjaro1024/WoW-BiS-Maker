import React from "react"
import SearchNav from "../components/SearchNav.js"
import ItemList from "../components/ItemsList.js"


const ItemSearch = ({setBisList, bisList, accessToken, setGear, gear}) => {
    const [searchName, setSearchName] = React.useState()
    const [searchType, setSearchType] = React.useState()
    const [searchSlot, setSearchSlot] = React.useState()
    // console.log(bisList)
    return (
        <>
            <h1>This is the Item Search Component</h1>
            <SearchNav setSearchName={setSearchName} setSearchType={setSearchType} setSearchSlot={setSearchSlot} accessToken={accessToken}/>
            <ItemList searchName={searchName} searchType={searchType} searchSlot={searchSlot} setBisList={setBisList} bisList={bisList} accessToken={accessToken} gear={gear} setGear={setGear}/>
        </>
    )
  
};

export default ItemSearch;