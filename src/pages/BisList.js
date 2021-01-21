import React from "react";
import BisListComp from "../components/BisListComp.js"

const BisList = ({bisList, setBisList, accessToken, gearObj, setGear, gear}) => {
  
  return (
    <>
      <h1>Bis List</h1>
      <BisListComp bisList={bisList} setBisList={setBisList} accessToken={accessToken} gearObj={gearObj} gear={gear} setGear={setGear}/>
    </>
  )
};

export default BisList;