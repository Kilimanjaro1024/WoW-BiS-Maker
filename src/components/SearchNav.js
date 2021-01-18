import React, { useContext } from "react";
import { Link } from "react-router-dom";


const SearchNav = ({setSearchName, setSearchType}) => {
    const [name, setName] = React.useState(null)
    const [type, setType] = React.useState(null)
    const handleNameChange = (e) =>{
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleTypeChange = (e) =>{
        setType(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setSearchName(name)
        setSearchType(type)      
    }
    return (
        <div className="nav">
        <form>
            <input 
                type="text"
                onChange={handleNameChange} 
                name="iname" 
                placeholder="Item Name">
            </input>  
            <select 
                id="types" 
                name="types"
                onChange={handleTypeChange}>
                <option value=""></option>
                <option value="Plate">Plate</option>
                <option value="Mail">Mail</option>
                <option value="Leather">Leather</option>
                <option value="Cloth">Cloth</option>
            </select>
            <input 
                type="text" 
                name="islot" 
                placeholder="Item Slot">
            </input>
            
            <input
                type="Submit"
                value="Submit"
                onClick={handleClick}>
            </input>
        </form>
        </div>
    );
};

export default SearchNav

