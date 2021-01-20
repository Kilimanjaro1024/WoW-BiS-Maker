import { getRoles } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import BisList from "../pages/BisList";

import BisItem from "./BisItem"
import StatSummary from "./StatSummary";

const  SlotManager = ({bisList, setBisList, accessToken, gearObj, setGear, gear}) => {
    
    
    const gearLayout = [gear.HEAD, gear.SHOULDER, gear.NECK, gear.CLOAK, gear.CHEST, gear.WRIST, gear.HAND, gear.WAIST, gear.LEGS, gear.FEET, gear.FINGER, gear.TRINKET]

    // const lableSlot = () =>{
    //     for (let i = 0; i < gearLayout.length; i++) {
    //         gearLayout[i].className = `slot${i}`     
    //     }
    // }
    // React.useEffect(() => {
    //     lableSlot()
    // }, [])
    return (
        <div className="slotMng">
            <div className="popup" id="popupAnchor">
            </div>
            {gearLayout.map((item, index) =>{
                console.log(index)
                if(item !== ""){
                    console.log(item)
                    return <BisItem bisItem={item} accessToken={accessToken} setBisList={setBisList} bisList={bisList} id={`slot${index}`}/>
                }
                else{
                    return <img src="https://static.wikia.nocookie.net/wowwiki/images/0/05/Ui-paperdoll-slot-ammo.png/revision/latest/scale-to-width-down/64?cb=20070606225836" alt="" width="56" height="56" id={`slot${index}`}/>
                }   
            })}
            
        </div>
    ) 
};

export default SlotManager