import React from "react";
import { Link } from "react-router-dom";
import ModalPopup from"./modal.js"

const Item = ({item, accessToken, setBisList, bisList, setGear, gear}) => {
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

    const updateBis = () =>{
        if(item.inventory_type.type === "HEAD"){
                             
            setGear({
             ...gear,
             HEAD: item
            })
            
         }
         else if(item.inventory_type.type === "CHEST"){
             
             setGear({
              ...gear,
              CHEST: item
             })
             
          }
          else if(item.inventory_type.type === "SHOULDER"){
             
            setGear({
             ...gear,
             SHOULDER: item
            })
            
         }
         else if(item.inventory_type.type === "NECK"){
             
            setGear({
             ...gear,
             NECK: item
            })
            
         }
         else if(item.inventory_type.type === "LEGS"){
             
            setGear({
             ...gear,
             LEGS: item
            })
            
         }
         else if(item.inventory_type.type === "HAND"){
             
            setGear({
             ...gear,
             HAND: item
            })
            
         }
         else if(item.inventory_type.type === "WRIST"){
             
            setGear({
             ...gear,
             WRIST: item
            })
            
         }
         else if(item.inventory_type.type === "WAIST"){
             
            setGear({
             ...gear,
             WAIST: item
            })
            
         }
         else if(item.inventory_type.type === "FEET"){
             
            setGear({
             ...gear,
             FEET: item
            })
            
         }
         else if(item.inventory_type.type === "CLOAK"){
             
            setGear({
             ...gear,
             CLOAK: item
            })
            
         }
         else if(item.inventory_type.type === "FINGER"){
             
            setGear({
             ...gear,
             FINGER: item
            })
            
         }
         else if(item.inventory_type.type === "TRINKET"){
             
            setGear({
             ...gear,
             TRINKET: item
            })
            
         }

    }
    let listCount = 0
    const addToBisList = () =>{
        console.log("add")
        
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
                        setBisList(bisList =>[...bisList, itemDetails])
                        console.log(bisList)
                        updateBis()
                    }
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