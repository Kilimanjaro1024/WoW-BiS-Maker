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
  const {  REACT_APP_API, REACT_APP_SECRECT , REACT_APP_TOKEN  } = process.env
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
    CLOAK: "",
    CHEST: "",
    WRIST: "",
    HAND: "",
    WAIST: "",
    LEGS: "",
    FEET: "",
    FINGER: "",
    TRINKET: ""
  }
  let listCount = 0
  const [bisList, setBisList] = React.useState([])
  const [gear, setGear] = React.useState(gearObj)
  // const [slot, setSlot] = React.useState(gear)
  const [accessToken,setAccessToken] = React.useState(REACT_APP_TOKEN)

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
      
      <Switch>
        <Route exact path="/">
          <Main className="mainPage"/>
        </Route>
        <Route exact path="/ItemSearch">
          <Nav/>
          <ItemSearch setBisList={setBisList} bisList={bisList} accessToken={accessToken} gear={gear} setGear={setGear} className="mainPage" listCount={listCount}/>
        </Route> 
        <Route exact path="/BisList">
          <Nav/>
          <BisList bisList={bisList} setBisList={setBisList} accessToken={accessToken} gearObj={gearObj} gear={gear} setGear={setGear} className="mainPage" listCount={listCount}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
