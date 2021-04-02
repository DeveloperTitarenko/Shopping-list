import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, NavLink, Switch, Redirect, BrowserRouter, useHistory} from 'react-router-dom'
import './style/main.css'
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import Authorization from "./Components/Authorization/Authorization";
function App() {
  const history = useHistory()
  history.push('/authorization')
  return (
    <>
      <Switch>
        <div className="shopping-list">
            <Route path='/authorization'  component={Authorization}/>
            <Route path='/shopping-list'  component={ShoppingList}/>
        </div>
        <Redirect to={'/authorization'}/>
      </Switch>
    </>
  );
}

export default App;
