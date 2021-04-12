import React from 'react'
import img from '../../image/1547366815_1.jpg'
import { Route, Switch} from 'react-router-dom'
import Registration from './Registration'
import SignIn from './SignIn'
import './authorization.css'

const Authorization = () => {
  return (
      <div className="authorization">
        <div className="authorization-wrapper">
          <div className="authorization-left">
            <img src={img} alt=""/>
          </div>
          <Switch>
            <Route path='/authorization' exact component={SignIn}/>
            <Route path='/authorization/register'  component={Registration}/>
          </Switch>
        </div>
      </div>
  )
}
export default Authorization