import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({searchName, searchType}) => {
   
    const accessToken = "USzM03l15osK38j64TWwBiVR5yOQPwj6Ao"
    const url = `https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&locale=en_US&name.en_US=${searchName}&orderby=id&_page=1&access_token=${accessToken}`

    const [items, setItems] = React.useState(null)

    const getItems = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        setItems(data)
    }

    React.useEffect(() =>{        
        getItems()
        // console.log(searchName)
    }, [url])

    const loaded = () =>{
        // console.log(items.results)
        const typeArr = []
        //checks if an armor type has been chosen and filters out items that do not match that name.
        if(searchType !== ""){
            for (let i = 0; i < items.results.length; i++) {
                if(items.results[i].data.item_subclass.name.en_US === searchType){
                    typeArr.push(items.results[i])
                    // console.log(items.results[i].data.name.en_US)
                }
                
            }
            // console.log(typeArr)
    
            return(
                <div>
                    {typeArr.map((items) =>{
                        return(
                            <>
                                <h1>Name: {items.data.name.en_US}</h1>
                                <h1>Type: {items.data.item_subclass.name.en_US}</h1>
                            </>
                        )         
                    })}
                </div>
            )
        }
        //returns all items that match the search name
        else {
            return(
                <div>
                    {items.results.map((items) =>{
                        console.log(items)
                        return(
                            <>
                                <h1>Name: {items.data.name.en_US}</h1>
                                <h1>Type: {items.data.item_subclass.name.en_US}</h1>
                            </>
                        )         
                    })}
                </div>
            )
        }
        
    }

    const loading = () =>{
        <h1>LOADING...</h1>
    }
    return (
        <div>
            {items ? loaded() : loading()}
        </div>
    );
};

export default ItemList