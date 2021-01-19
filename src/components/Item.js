import React from "react";
import { Link } from "react-router-dom";

const Item = ({item, accessToken, setBisList, bisList}) => {
    // console.log(bisList)
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

    const addToBisList = () =>{
        setBisList(bisList =>[...bisList, item])
        console.log(bisList)
    }

    const loaded = () =>{
        if(itemDetails !== null && itemDetails.preview_item.stats !== undefined){
            // console.log(itemDetails.preview_item)
            return(
                <div className="item">
                    <img src={icon.assets[0].value} alt=""></img>
                    <h1>Name: {item.name.en_US}</h1>
                    <h1>Type: {item.item_subclass.name.en_US}</h1>
                    <div className="item_stats">                        
                        {itemDetails.preview_item.stats.map((stat) =>{
                            return <h2>{stat.type.name}: {stat.value}</h2>   
                        })} 
                    </div>
                    <button onClick={addToBisList}>+</button>    
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