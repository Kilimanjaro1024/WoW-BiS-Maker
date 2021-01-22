import React from "react";
import { Link } from "react-router-dom";
import BisItem from "./BisItem.js";
import ModalPopup from"./modal.js"

const Item = ({item, accessToken, setBisList, bisList, setGear, gear, setStats, stats}) => {
    // console.log(bisList)
    const iconUrl = `https://us.api.blizzard.com/data/wow/media/item/${item.media.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`
    const itemUrl = `https://us.api.blizzard.com/data/wow/item/${item.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`

    const [icon, setIcon] = React.useState(null)
    const [itemDetails, setItemDetails] = React.useState(null)
    const [modalShow, setModalShow] = React.useState(false);

    const getIcon = async () =>{
        const response = await fetch(iconUrl)
        const data = await response.json()
        setIcon(data)
    }
    const getItemDetails = async () =>{
        const response = await fetch(itemUrl)
        const data = await response.json()
        setItemDetails(data)
    }

    const handleClick = () =>{
        console.log("Clicked")
        setModalShow(true)
    }

    React.useEffect(() =>{ 
        if(bisList.length > listCount){
            listCount = 0
        }       
        getIcon()
        getItemDetails()
    }, [iconUrl,itemUrl])

    const updateStats = (curItem) => {
        console.log(curItem.preview_item.stats)
        const newStats = {...stats}
                for (let x = 0; x < curItem.preview_item.stats.length; x++) {
                    
                    if(curItem.preview_item.stats[x].type.type === "INTELLECT"){
                        newStats.INTELLECT+= curItem.preview_item.stats[x].value   
                    }
                    else if(curItem.preview_item.stats[x].type.type === "STAMINA"){
                        newStats.STAMINA+= curItem.preview_item.stats[x].value
                    }
                    else if(curItem.preview_item.stats[x].type.type === "STRENGTH"){
                        newStats.STRENGTH+= curItem.preview_item.stats[x].value
                    }
                    else if(curItem.preview_item.stats[x].type.type === "AGILITY"){
                        newStats.AGILITY+= curItem.preview_item.stats[x].value
                    }
                    else if(curItem.preview_item.stats[x].type.type === "CRIT_RATING"){
                        newStats.CRIT_RATING+= curItem.preview_item.stats[x].value
                    }
                    else if(curItem.preview_item.stats[x].type.type === "VERSATILITY"){
                        newStats.VERSATILITY+= curItem.preview_item.stats[x].value
                    }
                    else if(curItem.preview_item.stats[x].type.type === "HASTE_RATING"){
                        newStats.HASTE_RATING+= curItem.preview_item.stats[x].value
                    }
                    else if(curItem.preview_item.stats[x].type.type === "MASTERY_RATING"){
                        newStats.MASTERY_RATING+= curItem.preview_item.stats[x].value
                    } 
                }
                setStats(newStats)       
            

    }
    const updateBis = () => {
        const newGear = {...gear}
        console.log(item.inventory_type.type)
        if(item.inventory_type.type === "HEAD"){
            newGear.HEAD = item
            updateStats(itemDetails) 
            
         }
         else if(item.inventory_type.type === "CHEST"){
            newGear.CHEST = item
             console.log("Bruh")
             updateStats(itemDetails) 
             
          }
          else if(item.inventory_type.type === "SHOULDER"){
            newGear.SHOULDER = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "NECK"){
            newGear.NECK = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "LEGS"){
            newGear.LEGS = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "HAND"){
            newGear.HAND = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "WRIST"){
            newGear.WRIST = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "WAIST"){
            newGear.WAIST = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "FEET"){
            newGear.FEET = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "CLOAK"){
            newGear.CLOAK = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "FINGER"){
            newGear.FINGER = item
            updateStats(itemDetails) 
         }
         else if(item.inventory_type.type === "TRINKET"){
            newGear.TRINKET = item
            updateStats(itemDetails) 
         }
         setGear(newGear)

    }
    let listCount = 0
    const addToBisList = () =>{
        console.log("add")
        const newList = bisList
        if(bisList.length === 0){
            setBisList(bisList =>[...bisList, itemDetails])
            console.log(bisList)
            updateBis()  
        }
        else{
            for(let i = 0; i< bisList.length; i++){
                console.log(bisList[i])
                if(bisList[i].inventory_type.type !== itemDetails.inventory_type.type){
                    listCount++
                    if(listCount === bisList.length){
                        newList.push(itemDetails)
                        // setBisList(bisList =>[...bisList, itemDetails])
                        console.log(bisList)
                        updateBis()
                    }
                    setBisList(newList)
                }
                else{
                    console.log("error")
                }
            }
            
        }   
    }

    const loaded = () =>{
        if(itemDetails !== null && itemDetails.preview_item.stats !== undefined){
            // console.log(itemDetails.preview_item)
            return(
                <>
                    <ModalPopup
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            icon={<img src={icon.assets[0].value} alt=""></img>}
                            itemName={item.name.en_US}
                            itemStats={<div>                        
                                {itemDetails.preview_item.stats.map((stat) =>{
                                    return <p>{stat.type.name}: {stat.value}</p>   
                                })} 
                            </div>}
                            buttonText="Add"
                            buttonFunction={addToBisList}
                        />
                    <div className="item">
                        <img src={icon.assets[0].value} alt="" onClick={handleClick}/>
                        <p>{item.name.en_US}</p>
                        <p>{item.item_subclass.name.en_US}</p>
                        <button onClick={addToBisList} className="btn btn-primary">+</button>    
                    </div>
                </>
            )
        }
    }

    const loading = () =>{
        <h1>LOADING...</h1>
    }
    return (
        <div className="itemContainer">
            {icon ? loaded() : loading()}
        </div>
    );
};

export default Item