import React from "react";
import { Link } from "react-router-dom";

const Item = ({item, accessToken}) => {
    const iconUrl = `https://us.api.blizzard.com/data/wow/media/item/${item.media.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`
    const itemUrl = `https://us.api.blizzard.com/data/wow/item/${item.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`

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
    }, [iconUrl,itemUrl])

    const loaded = () =>{
        if(itemDetails !== null){
            console.log(itemDetails.preview_item)
            return(
                <div>
                    <img src={icon.assets[0].value} alt=""></img>
                    <h1>Name: {item.name.en_US}</h1>
                    <h1>Type: {item.item_subclass.name.en_US}</h1>
                    <div>                        
                        {itemDetails.preview_item.stats.map((stat) =>{
                            return <h2>{stat.type.name}: {stat.value}</h2>   
                        })} 
                    </div>
                    
                </div>
            )
        }
        

        

    }

    const loading = () =>{
        <h1>LOADING...</h1>
    }
    return (
        <div>
            {icon ? loaded() : loading()}
        </div>
    );
};

export default Item