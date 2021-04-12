import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {AiOutlineGoogle} from "react-icons/ai";
import {ImFacebook} from "react-icons/im";
import {useHistory} from "react-router-dom";
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000"
})

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  const login = () => {
    axiosInstance.post('/signIn', { email, password })
      .then((response) => {
        const token = localStorage.setItem('token', response.data.token)
        history.push('/shopping-list')
        setEmail('')
        setPassword('')
      }).catch(err => console.log(err))
  }

  return (
    <div className="authorization-right">
      <Form>
        <h1 className="authorization-right-heading">SIGN IN</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" size="lg" block onClick={login}>
          Sign In
        </Button>
        <Button variant="link" size="lg" block onClick={() => history.push('/authorization/register')}>
          Register
        </Button>
        <Button variant="danger" size="lg" block className="authorization-btn-link">
          <AiOutlineGoogle/>
          SIGN IN WITH GOOGLE
        </Button>
        <Button variant="primary" size="lg" block className="authorization-btn-link">
          <ImFacebook/>
          SIGN IN WITH FACEBOOK
        </Button>
      </Form>
    </div>
  )
}
export default SignIn