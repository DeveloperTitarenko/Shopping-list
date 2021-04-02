import React from 'react'
import img from '../../image/1547366815_1.jpg'
import { Route, NavLink, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import Registration from './Registration'
import SignIn from './SignIn'

const Authorization = () => {
  return (
      <div className="authorization">
        <div className="authorization-left">
          <img src={img} alt=""/>
        </div>
        <Switch>
          <Route path='/authorization' exact component={SignIn}/>
          <Route path='/authorization/register'  component={Registration}/>
        </Switch>
      </div>
  )
}
export default Authorization