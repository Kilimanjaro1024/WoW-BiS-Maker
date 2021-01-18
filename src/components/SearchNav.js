import React, { useContext } from "react";
import { Link } from "react-router-dom";


const SearchNav = ({setSearchName, setSearchType, setSearchSlot}) => {
    const [name, setName] = React.useState("")
    const [type, setType] = React.useState("")
    const [slot, setSlot] = React.useState("")
    const handleNameChange = (e) =>{
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleTypeChange = (e) =>{
        setType(e.target.value)
        console.log(e.target.value)
    }

    const handleSlotChange = (e) =>{
        setSlot(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setSearchName(name)
        setSearchType(type)
        setSearchSlot(slot)      
    }
    console.log(type)
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
            <select 
                id="types" 
                name="types"
                onChange={handleSlotChange}>
                    <option value={null}></option>
                    <option value="HEAD">Head</option>
                    <option value="NECK">Neck</option>
                    <option value="SHOULDER">Shoulder</option>
                    <option value="CLOAK">Cloak</option>
                    <option value="CHEST">Chest</option>
                    <option value="WRIST">Wrist</option>
                    <option value="GLOVE">Glove</option>
                    <option value="WAIST">Waist</option>
                    <option value="LEGS">Legs</option>
                    <option value="FEET">Feet</option>
                    <option value="TRINKET">Trinket</option>
                    <option value="FINGER">Finger</option>
                    <option value="WEAPON">Weapon</option>
            </select>
            
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

