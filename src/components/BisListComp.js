import React from "react";
import { Link } from "react-router-dom";
import BisList from "../pages/BisList";
import Item from "./Item"
import SlotManager from "./SlotManager.js"
import StatSummary from "./StatSummary"

const BisListComp = ({bisList, setBisList, accessToken, gearObj, setGear, gear }) => {
    // console.log(bisList)
    return (
        <div className="page">
            <div className="bisListTitle">      
                    <h4>Best in Slot Items</h4>
            </div>
            <div className="bisComp">
                <SlotManager bisList={bisList} accessToken={accessToken} gearObj={gearObj} gear={gear} setGear={setGear} setBisList={setBisList}/>
                {/* <StatSummary bisList={bisList}/> */}
                {/* {bisList.map((bisItem) =>{
                    return <Item item={bisItem} accessToken={accessToken} setBisList={setBisList} bisList={bisList}/>
                })} */}
                <div className="statsSummary">
                    <h1>Item Name</h1>
                    <p>stat</p>
                    <p>stat</p>
                    <p>stat</p>
                    <p>stat</p>
                </div>
                <div className="itemInspector">
                    <h1>Item Name</h1>
                    <p>stat</p>
                    <p>stat</p>
                    <p>stat</p>
                    <p>stat</p>
                </div>
            </div>
            
        </div>
    ) 
};

export default BisListComp