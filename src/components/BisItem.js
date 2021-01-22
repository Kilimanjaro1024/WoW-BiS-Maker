import React from "react";
import { Link } from "react-router-dom";
import ModalPopup from"./modal.js"
import Modal from "react-bootstrap/Modal"

import Item from "./Item.js"

const BisItem = ({bisItem, bisList, setBisList, accessToken, id, gear, setGear}) => {
    const itemNum = bisItem
    const iconUrl = `https://us.api.blizzard.com/data/wow/media/item/${bisItem.media.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`
    const itemUrl = `https://us.api.blizzard.com/data/wow/item/${bisItem.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`

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

    React.useEffect(() =>{
        getIcon()
        getItemDetails()      
    }, [])

    const updateBis = () =>{
        if(bisItem.inventory_type.type === "HEAD"){     
            console.log("hello")                       
            setGear({
                ...gear,
                HEAD: "",
                
            })
            console.log(gear)           
         }
         else if(bisItem.inventory_type.type === "CHEST"){
             console.log("hello")          
             setGear({
              ...gear,
            //   CHEST: ""
             })
             console.log(gear)
          }
          else if(bisItem.inventory_type.type === "SHOULDER"){     
            setGear({
             ...gear,
            //  SHOULDER: ""
            })
            console.log(gear)        
         }
         else if(bisItem.inventory_type.type === "NECK"){      
            setGear({
             ...gear,
            //  NECK: ""
            })
            console.log(gear)    
         }
         else if(bisItem.inventory_type.type === "LEGS"){  
            setGear({
             ...gear,
            //  LEGS: ""
            })
            console.log(gear)    
         }
         else if(bisItem.inventory_type.type === "HAND"){    
            setGear({
             ...gear,
            //  HAND: ""
            })
            console.log(gear)   
         }
         else if(bisItem.inventory_type.type === "WRIST"){ 
            setGear({
             ...gear,
            //  WRIST: ""
            })
            console.log(gear)
         }
         else if(bisItem.inventory_type.type === "WAIST"){
            setGear({
             ...gear,
            //  WAIST: ""
            })
            console.log(gear)
         }
         else if(bisItem.inventory_type.type === "FEET"){
            setGear({
             ...gear,
            //  FEET: ""
            })
            console.log(gear)
         }
         else if(bisItem.inventory_type.type === "CLOAK"){
            setGear({
             ...gear,
            //  CLOAK: ""
            })
            console.log(gear)
         }
         else if(bisItem.inventory_type.type === "FINGER"){ 
            setGear({
             ...gear,
            //  FINGER: ""
            })
            console.log(gear)
         }
         else if(bisItem.inventory_type.type === "TRINKET"){ 
            setGear({
             ...gear,
            //  TRINKET: ""
            })
            console.log(gear)
         }
         

    }

    const handleClick = () =>{
        console.log("Clicked")
        setModalShow(true)
    }

    const handleRemove = (bis) =>{
        
        // for (let i = 0; i < bisList.length; i++) {
        //     if(bisList[i].id === bisItem.id){
        //         index = i
               
                
        //     }
            
            
        // }
        
        
        setBisList(bisList.filter((item) => (item.name.en_US !== bis)))
        updateBis()
        console.log(bisList)
        
        setModalShow(false)
        
        
    }

    const loaded = () =>{
        // return <h1>bisItem</h1>
        if(itemDetails !== null){
            
            // console.log(itemDetails.preview_item)
            return(
                <>
                    <ModalPopup
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        icon={<img src={icon.assets[0].value} alt=""></img>}
                        itemName={bisItem.name.en_US}
                        itemStats={
                            <div>                        
                                {itemDetails.preview_item.stats.map((stat) =>{
                                    return <p>{stat.type.name}: {stat.value}</p>   
                                })} 
                            </div>}
                        // buttonText="Remove"
                        // buttonFunction={handleRemove}
                        // itemInfo={bisItem}
                    />
                    <div>                     
                        <img src={icon.assets[0].value} alt="" onClick={handleClick}></img>
                    </div>
                    </>
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