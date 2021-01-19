import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main.js"
import BisList from "./pages/BisList.js"
import ItemSearch from "./pages/ItemSearch.js"
import Nav from "./components/Nav.js"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/ItemSearch">
          <ItemSearch/>
        </Route> 
        <Route exact path="/BisList">
          <BisList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
