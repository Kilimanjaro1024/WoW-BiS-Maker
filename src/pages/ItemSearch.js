import React from "react"
import SearchNav from "../components/SearchNav.js"
import ItemList from "../components/ItemsList.js"


const ItemSearch = ({setBisList, bisList, accessToken, setGear, gear, setStats, stats}) => {
    const [searchName, setSearchName] = React.useState()
    const [searchType, setSearchType] = React.useState()
    const [searchSlot, setSearchSlot] = React.useState()
    // console.log(bisList)
    return (
        <>
        <div className="pageHeading">
            <SearchNav 
                setSearchName={setSearchName} 
                setSearchType={setSearchType} 
                setSearchSlot={setSearchSlot} 
                accessToken={accessToken}/>
        </div>   
            <ItemList 
                searchName={searchName} 
                searchType={searchType} 
                searchSlot={searchSlot} 
                setBisList={setBisList} 
                bisList={bisList} 
                accessToken={accessToken} 
                gear={gear} 
                setGear={setGear}
                setStats={setStats}
                stats={stats}
                />
        </>
    )
};

export default ItemSearch;