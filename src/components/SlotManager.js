import { getRoles } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import BisList from "../pages/BisList";

import BisItem from "./BisItem"

const  SlotManager = ({bisList, setBisList, accessToken, gearObj, setGear, gear}) => {

    const gearLayout = [gear.HEAD, gear.SHOULDER, gear.NECK, gear.CLOAK, gear.CHEST, gear.WRIST, gear.HAND, gear.WAIST, gear.LEGS, gear.FEET, gear.FINGER, gear.TRINKET]
    return (
        <div>
            
            {/* <img src="https://static.wikia.nocookie.net/wowpedia/images/c/c3/Ui-paperdoll-slot-head.png/revision/latest/scale-to-width-down/120?cb=20070607015044" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/f/fa/Ui-paperdoll-slot-shoulder.png/revision/latest/scale-to-width-down/120?cb=20070607015347" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/b/b7/Ui-paperdoll-slot-chest.png/revision/latest/scale-to-width-down/120?cb=20070606225854" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/d/d4/Ui-paperdoll-slot-neck.png/revision/latest/scale-to-width-down/64?cb=20070607015138" alt=""></img>

            <img src="https://static.wikia.nocookie.net/wowpedia/images/b/b7/Ui-paperdoll-slot-chest.png/revision/latest/scale-to-width-down/64?cb=20070606225854" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/1/1d/Ui-paperdoll-slot-wrists.png/revision/latest/scale-to-width-down/64?cb=20070607015415" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/2/22/Ui-paperdoll-slot-hands.png/revision/latest/scale-to-width-down/64?cb=20070607015036" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/c/cd/Ui-paperdoll-slot-waist.png/revision/latest/scale-to-width-down/64?cb=20070607015409" alt=""></img>

            <img src="https://static.wikia.nocookie.net/wowpedia/images/1/14/Ui-paperdoll-slot-legs.png/revision/latest/scale-to-width-down/64?cb=20070607015103" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/a/a5/Ui-paperdoll-slot-feet.png/revision/latest/scale-to-width-down/64?cb=20070607015023" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/c/c2/Ui-paperdoll-slot-finger.png/revision/latest/scale-to-width-down/64?cb=20070607015031" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/c/c2/Ui-paperdoll-slot-finger.png/revision/latest/scale-to-width-down/64?cb=20070607015031" alt=""></img>

            <img src="https://static.wikia.nocookie.net/wowpedia/images/2/26/Ui-paperdoll-slot-trinket.png/revision/latest/scale-to-width-down/64?cb=20070607015403" alt=""></img>
            <img src="https://static.wikia.nocookie.net/wowpedia/images/2/26/Ui-paperdoll-slot-trinket.png/revision/latest/scale-to-width-down/64?cb=20070607015403" alt=""></img> */}
            {gearLayout.map((item) =>{
                if(item !== ""){
                    console.log(item)
                    return <BisItem bisItem={item} accessToken={accessToken} setBisList={setBisList} bisList={bisList}/>
                }
                else{
                    return <img src="https://static.wikia.nocookie.net/wowpedia/images/f/f5/Ui-paperdoll-slot-mainhand.png/revision/latest/scale-to-width-down/120?cb=20070607015117" alt=""/>
                }
                
            })}
            
        </div>
    ) 
};

export default SlotManager