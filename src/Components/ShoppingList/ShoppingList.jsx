import React from 'react'

import './shopping-list.css'
import Logo from "../Header/Logo/logo";
import {useHistory} from 'react-router-dom'

const ShoppingList = () => {
  const history = useHistory()
  return(
    <div className="home">
      <header className="home-header">
        <Logo/>
        <div className="authorization-btn">
          <button onClick={() => history.push('/authorization')}>Login</button>
          <button onClick={() => history.push('/authorization/register')}>Sign Up</button>
        </div>
      </header>
      <main className="home-content">
        <h1>
          Create <span>direct polls</span><br/> <span>quickly and efficiently</span>
        </h1>
        <button onClick={() => history.push('/table')}>Check Our Demo</button>
        <div>We create professional poll based on <a href="#">8850 FORM</a>.</div>
      </main>
    </div>
  )
}

export default ShoppingList