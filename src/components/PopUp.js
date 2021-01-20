import React from "react";
import { Link } from "react-router-dom";
import BisList from "../pages/BisList";

const PopUp = ({bisList, setBisList, accessToken}) => {
    console.log(bisList)
    return (
        <div class="popup" onclick={handleClick}>
            <span className="popuptext" id="myPopup">Popup text</span>
        </div>
    ) 
};

export default PopUp