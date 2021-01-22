import React from "react";
import BisListComp from "../components/BisListComp.js"

const BisList = ({bisList, setBisList, accessToken, gearObj, setGear, gear , stats, setStats}) => {
  
  return (
    <>
      <BisListComp 
        bisList={bisList} 
        setBisList={setBisList} 
        accessToken={accessToken} 
        gearObj={gearObj} 
        gear={gear} 
        setGear={setGear}
        setStats={setStats}
        stats={stats}/>
    </>
  )
};

export default BisList;