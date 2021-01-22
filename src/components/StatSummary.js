import React from "react";
import { Link } from "react-router-dom";

const StatSummary = ({bisList, stats, setStats}) => {

    

    // const [stats, setStats] = React.useState(statsObj)
    
    const summarizeStats = () =>{
        
    }

    // React.useEffect(() =>{
    //     summarizeStats()
    // }, [])
    // console.log(bisList)
    return (
        <div className="stats">
            <p className="primary">STRENGTH: {stats.STRENGTH}</p>
            <p className="primary">STAMINA: {stats.STAMINA}</p>
            <p className="primary">AGILITY: {stats.AGILITY}</p>
            <p className="primary">INTELLECT: {stats.INTELLECT}</p>
            <p className="secondary">CRIT: {stats.CRIT_RATING}</p>
            <p className="secondary">MASTERY: {stats.MASTERY_RATING}</p>
            <p className="secondary">HASTE: {stats.HASTE_RATING}</p>
            <p className="secondary">VERS: {stats.VERSATILITY}</p>
        </div>
    ) 
};

export default StatSummary