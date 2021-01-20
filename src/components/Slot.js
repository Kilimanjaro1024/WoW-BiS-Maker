import React from "react";
import { Link } from "react-router-dom";
import BisList from "../pages/BisList";

const  Slot = ({bisList, setBisList, accessToken}) => {
    console.log(bisList)
    return (
        <div>
            {/* {bisList.map((bisItem) =>{
                return <Item item={bisItem} accessToken={accessToken} setBisList={setBisList} bisList={bisList}/>
            })}
             */}
        </div>
    ) 
};

export default Slot