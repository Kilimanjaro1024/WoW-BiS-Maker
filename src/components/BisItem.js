import React from "react";
import { Link } from "react-router-dom";

import Item from "./Item.js"

const BisItem = ({bisItem, setBisList, accessToken, id}) => {
    // console.log(bisItem)
    const iconUrl = `https://us.api.blizzard.com/data/wow/media/item/${bisItem.media.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`
    const itemUrl = `https://us.api.blizzard.com/data/wow/item/${bisItem.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`

    const [icon, setIcon] = React.useState(null)
    const [itemDetails, setItemDetails] = React.useState(null)

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

    React.useEffect(() =>{        
        getIcon()
        getItemDetails()
    }, [])

    const handleClick = () =>{
        console.log("Clicked")
        const popup = document.getElementById(bisItem.id)
        popup.classList.toggle("show")
    }

    const loaded = () =>{
        // return <h1>bisItem</h1>
        if(itemDetails !== null){
            
            // console.log(itemDetails.preview_item)
                return(
                    <div>
                        
                       
                        <div class="popup" onClick={handleClick}>
                        <img src={icon.assets[0].value} alt=""></img>
                            <span className="popuptext" id={bisItem.id}>
                                <Item item={bisItem} accessToken={accessToken} setBisList={setBisList}/>
                            </span>
                        </div>
                       
                        {/* <h1>Name: {bisItem.name.en_US}</h1>
                        <h1>Type: {bisItem.item_subclass.name.en_US}</h1>
                        <div>                        
                            {itemDetails.preview_item.stats.map((stat) =>{
                                return <h2>{stat.type.name}: {stat.value}</h2>   
                            })} 
                        </div> */}  
                    </div>
                )
        }
        
        

    }

    const loading = () =>{
        <h1>LOADING...</h1>
    }
    return (
        <div className="bisItem" id={id}>
            {icon ? loaded() : loading()}
        </div>
    );
    // return (
    //     <div>hi
    //     </div>
    // ) 
};

export default BisItem