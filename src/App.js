import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main.js"
import BisList from "./pages/BisList.js"
import ItemSearch from "./pages/ItemSearch.js"
import Nav from "./components/Nav.js"
import React from "react"


function App() {
  const [bisList, setBisList] = React.useState([])
  const accessToken = "UStLjWOnrdAmZ0VkWi6tMtLifEZsvbw4E5"
  // console.log(bisList)
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/ItemSearch">
          <ItemSearch setBisList={setBisList} bisList={bisList} accessToken={accessToken}/>
        </Route> 
        <Route exact path="/BisList">
          <BisList bisList={bisList} setBisList={setBisList} accessToken={accessToken}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
