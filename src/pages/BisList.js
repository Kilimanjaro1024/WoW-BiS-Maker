import React from "react";
import BisListComp from "../components/BisListComp.js"

const BisList = ({bisList, setBisList, accessToken, gearObj, setGear, gear ,listCount}) => {
  
  return (
    <>
      {/* <div className="pageHeading">
        <h>Bis List</h>
      </div> */}
      
      <BisListComp bisList={bisList} setBisList={setBisList} accessToken={accessToken} gearObj={gearObj} gear={gear} setGear={setGear}/>
    </>
  )
};

export default BisList;