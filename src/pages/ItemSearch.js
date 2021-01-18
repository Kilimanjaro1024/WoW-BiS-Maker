import React from "react"
import SearchNav from "../components/SearchNav.js"
import ItemList from "../components/ItemsList.js"


const ItemSearch = (props) => {
    const [searchName, setSearchName] = React.useState()
    const [searchType, setSearchType] = React.useState()
    const [searchSlot, setSearchSlot] = React.useState()
    return (
        <>
            <h1>This is the Item Search Component</h1>
            <SearchNav setSearchName={setSearchName} setSearchType={setSearchType} setSearchSlot={setSearchSlot}/>
            <ItemList searchName={searchName} searchType={searchType} searchSlot={searchSlot}/>
        </>
    )
  
};

export default ItemSearch;