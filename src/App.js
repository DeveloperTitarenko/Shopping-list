import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch, Redirect, BrowserRouter, useHistory} from 'react-router-dom'
import './style/main.css'
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import Authorization from "./Components/Authorization/Authorization";
import TablePage from "./Components/Table/table-page";
import Header from "./Components/Header/header";

function App() {
  const history = useHistory()
  history.push('/table')
  return (
    <>
      <Switch>
        <div className="shopping-list">
            <Route path='/authorization'  component={Authorization}/>
            <Route path='/shopping-list'  component={ShoppingList}/>
          <Route path='/table' component={TablePage}/>
        </div>
        <Redirect to={'/authorization'}/>
      </Switch>
    </>
  );
}

export default App;
