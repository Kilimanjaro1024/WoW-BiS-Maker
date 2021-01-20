import React from "react";
import { Link } from "react-router-dom";
import BisList from "../pages/BisList";
import Item from "./Item"
import SlotManager from "./SlotManager.js"

const BisListComp = ({bisList, setBisList, accessToken, gearObj, setGear, gear}) => {
    // console.log(bisList)
    return (
        <div>
            <SlotManager bisList={bisList} accessToken={accessToken} gearObj={gearObj} gear={gear} setGear={setGear}/>
            {/* {bisList.map((bisItem) =>{
                return <Item item={bisItem} accessToken={accessToken} setBisList={setBisList} bisList={bisList}/>
            })} */}
            
        </div>
    ) 
};

export default BisListComp