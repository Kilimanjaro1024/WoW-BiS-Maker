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
 
  const statsObj = {
    STAMINA: 0,
    STRENGTH: 0,
    INTELLECT: 0,
    AGILITY: 0,
    CRIT_RATING: 0,
    HASTE_RATING: 0,
    MASTERY_RATING: 0,
    VERSATILITY: 0
  }

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
  const [stats, setStats] = React.useState(statsObj)
  // const [slot, setSlot] = React.useState(gear)
  const [accessToken,setAccessToken] = React.useState(REACT_APP_TOKEN)

  //#region generate Token
  // React.useEffect(async () =>{
  //   const BnetApi = new BlizzAPI({ region:'us', clientId: REACT_APP_API, clientSecret: REACT_APP_SECRECT });

  //   BnetApi.getAccessToken()
  //     .then((aToken) => {
  //     setAccessToken(aToken)
  //   });

  //   // let token = await createAccessToken(REACT_APP_API, REACT_APP_SECRECT)
    
  // }, [])
  // console.log(accessToken)
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
  //#endregion
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Main className="mainPage"/>
        </Route>
        <Route exact path="/ItemSearch">
          <Nav/>
          <ItemSearch 
            setBisList={setBisList} 
            bisList={bisList} 
            accessToken={accessToken} 
            gear={gear} 
            setGear={setGear} 
            className="mainPage" 
            listCount={listCount}
            setStats={setStats}
            stats={stats}/>
        </Route> 
        <Route exact path="/BisList">
          <Nav/>
          <BisList 
            bisList={bisList} 
            setBisList={setBisList} 
            accessToken={accessToken} 
            gearObj={gearObj} 
            gear={gear} 
            setGear={setGear} 
            className="mainPage" 
            listCount={listCount}
            setStats={setStats}
            stats={stats}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
