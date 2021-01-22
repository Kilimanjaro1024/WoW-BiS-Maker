import React from "react";
import { Link } from "react-router-dom";

const StatSummary = ({bisList}) => {

    const statsObj = {
        STAMINA: 0,
        STRENTH: 0,
        INTELLECT: 0,
        AGILITY: 0,
        CRIT_RATING: 0,
        HASTE: 0,
        MASTERY: 0,
        VERSATILTY: 0
    }

    const [stats, setStats] = React.useState(statsObj)
    
    const summarizeStats = () =>{
        // for (let i = 0; i < bisList.length; i++) {
        //    for (let x = 0; x < bisList[i].preview_item.stats.length; x++) {
                    // if ( the stat type is equal to Intellect){
                    //     then add the value of the stat to current value of the summary field with an equal type.
                    // }
                    // ...
        //     }
        // }



        //#region "summary code"
        // for (let i = 0; i < bisList.length; i++) {
        //     for (let x = 0; x < bisList[i].preview_item.stats.length; x++) {
        //         if(bisList[i].preview_item.stats[x].type.type === "INTELLECT"){
        //             setStats({
        //                 ...stats,
        //                 INTELLECT: statsObj.INTELLECT + bisList[i].preview_item.stats[x].value
        //             })
                    
        //         }
        //         // else if(bisList[i].preview_item.stats[x].type.type === "STAMINA"){
        //         //     setStats({
        //         //         ...stats,
        //         //         STAMINA: stats.STAMINA + bisList[i].preview_item.stats[x]
        //         //     })
        //         // }
        //         // else if(bisList[i].preview_item.stats[x].type.type === "STRENGTH"){
        //         //     setStats({
        //         //         ...stats,
        //         //         STRENTH: stats.STRENTH + bisList[i].preview_item.stats[x]
        //         //     })
        //         // }
        //         // else if(bisList[i].preview_item.stats[x].type.type === "AGILITY"){
        //         //     setStats({
        //         //         ...stats,
        //         //         AGILITY: stats.AGILITY + bisList[i].preview_item.stats[x]
        //         //     })
        //         // }
        //         // else if(bisList[i].preview_item.stats[x].type.type === "CRIT_RATING"){
        //         //     setStats({
        //         //         ...stats,
        //         //         CRIT_RATING: stats.CRIT_RATING + bisList[i].preview_item.stats[x]
        //         //     })
        //         // }
        //         // else if(bisList[i].preview_item.stats[x].type.type === "VERSATILITY"){
        //         //     setStats({
        //         //         ...stats,
        //         //         VERSATILTY: stats.VERSATILTY + bisList[i].preview_item.stats[x]
        //         //     })
        //         // }
        //         // else if(bisList[i].preview_item.stats[x].type.type === "HASTE"){
        //         //     setStats({
        //         //         ...stats,
        //         //         HASTE: stats.HASTE + bisList[i].preview_item.stats[x]
        //         //     })
        //         // }
        //         // else if(bisList[i].preview_item.stats[x].type.type === "MASTERY"){
        //         //     setStats({
        //         //         ...stats,
        //         //         MASTERY: stats.MASTERY + bisList[i].preview_item.stats[x]
        //         //     })
        //         // }
    
                
        //     }       
        // }
        //#endregion
    }

    React.useEffect(() =>{
        summarizeStats()
    }, [])
    // console.log(bisList)
    return (
        <div>
            {/* <SlotManager bisList={bisList} accessToken={accessToken} gearObj={gearObj} gear={gear} setGear={setGear}/> */}
            {/* {bisList.map((bisItem) =>{
                return <Item item={bisItem} accessToken={accessToken} setBisList={setBisList} bisList={bisList}/>
            })} */}
            
        </div>
    ) 
};

export default StatSummary