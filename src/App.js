import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import './style/main.css'
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import Authorization from "./Components/Authorization/Authorization";
function App() {
  return (
    <>
      <Switch>
        <div className="shopping-list">
          <Route path='/' exact component={Authorization}/>
          <Route path='/shopping-list' exact component={ShoppingList}/>
        </div>
      </Switch>
    </>
  );
}

export default App;
