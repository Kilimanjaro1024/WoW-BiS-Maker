import React from "react";
import { Link } from "react-router-dom";
import BisList from "../pages/BisList";
import BisItem from "./BisItem"

const BisListComp = ({bisList, setBisList, accessToken}) => {
    console.log(bisList)
    return (
        <div>
            {bisList.map((bisItem) =>{
                console.log(bisItem);
                
                return <BisItem bisItem={bisItem} setBisList={setBisList} accessToken={accessToken}/>
                
                // </BisItem>
            })}
            
        </div>
    ) 
};

export default BisListComp