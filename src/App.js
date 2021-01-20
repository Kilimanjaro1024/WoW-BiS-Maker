import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main.js"
import BisList from "./pages/BisList.js"
import ItemSearch from "./pages/ItemSearch.js"
import Nav from "./components/Nav.js"
import React from "react"
import BlizzAPI from "blizzapi"


function App() {
  const {  REACT_APP_API, REACT_APP_SECRECT  } = process.env
  // console.log(REACT_APP_API)
  


  // const createAccessToken = (apiKey, apiSecret) =>{
  //   // const api = new BlizzAPI({
  //   //   region: 'us',
  //   //   clientId: apiKey,
  //   //   clientSecret: apiSecret
  //   // });
  
  //   // const data = await api.query('/oauth/token');
    
  //   // return data
  // }
  const gearObj = {
    HEAD: "",
    SHOULDER: "",
    NECK: "",
    BACK: "",
    CHEST: "",
    WRIST: "",
    HAND: "",
    WAIST: "",
    LEGS: "",
    BOOTS: "",
    FINGER: "",
    TRINKET: ""
  }
  const [bisList, setBisList] = React.useState([])
  const [gear, setGear] = React.useState(gearObj)
  // const [slot, setSlot] = React.useState(gear)
  const [accessToken,setAccessToken] = React.useState("UStLjWOnrdAmZ0VkWi6tMtLifEZsvbw4E5")

  // React.useEffect(async () =>{
  //   const BnetApi = new BlizzAPI({ region:'us', clientId: REACT_APP_API, clientSecret: REACT_APP_SECRECT });

  //   BnetApi.getAccessToken()
  //     .then((aToken) => {
  //     setAccessToken(aToken)
  //   });

  //   // let token = await createAccessToken(REACT_APP_API, REACT_APP_SECRECT)
    
  // }, [])
  // console.log(accessToken)
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/ItemSearch">
          <ItemSearch setBisList={setBisList} bisList={bisList} accessToken={accessToken} gear={gear} setGear={setGear}/>
        </Route> 
        <Route exact path="/BisList">
          <BisList bisList={bisList} setBisList={setBisList} accessToken={accessToken} gearObj={gearObj} gear={gear} setGear={setGear}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
