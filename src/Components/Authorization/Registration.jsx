import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from "react-bootstrap"
import {ImFacebook} from 'react-icons/im'
import {AiOutlineGoogle} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000"
})


const Registration = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useHistory();

  const register = () => {
    if(password === confirmPassword) {
      axiosInstance.post('/register', {username, email, password})
        .then((response) => {
          setUserName('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          localStorage.setItem('token', response.data.token)
          history.push('/shopping-list')
        }).catch(err => console.log(err))
    }else{
      console.log('Password mismatch')
    }
  }

  return (
    <div className="authorization-right">
      <h1 className="authorization-right-heading">REGISTER</h1>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUserName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <div className="border"></div>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" size="lg" block onClick={register}>
          Register
        </Button>
        <Button variant="link" size="lg" block onClick={() => history.push('/authorization')}>
          Sign In
        </Button>
        <div className="border"></div>
        <Button variant="danger" size="lg" block className="authorization-btn-link">
          <AiOutlineGoogle/>
          SIGN UP WITH GOOGLE
        </Button>
        <Button variant="primary" size="lg" block className="authorization-btn-link">
          <ImFacebook/>
          SIGN UP WITH FACEBOOK
        </Button>
      </Form>
    </div>
  )
}
export default Registration