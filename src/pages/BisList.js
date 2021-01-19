import React from "react";
import BisListComp from "../components/BisListComp.js"

const BisList = ({bisList, setBisList, accessToken}) => {
  return <BisListComp bisList={bisList} setBisList={setBisList} accessToken={accessToken}/>;
};

export default BisList;