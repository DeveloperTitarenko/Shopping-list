import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from "react-bootstrap"
import img from '../../image/1547366815_1.jpg'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineGoogle } from 'react-icons/ai'


const Register = () => {
  return (
    <div className="registration">
      <div className="registration-left">
        <img src={img} alt=""/>
      </div>
      <div className="registration-right">
        <h1>REGISTER</h1>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Username"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>
            <div className="border"></div>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"/>
            <Form.Control type="password" placeholder="Confirm password"/>
          </Form.Group>

          <Button variant="primary" size="lg" block>
            Register
          </Button>
          <Button variant="link" size="lg" block>
            Sign In
          </Button>
          <div className="border"></div>
          <Button variant="danger" size="lg" block>
            <AiOutlineGoogle />
            SIGN UP WITH GOGGLE
          </Button>
          <Button variant="primary" size="lg" block>
            <ImFacebook />
            SIGN UP WITH FACEBOOK
          </Button>
        </Form>
      </div>
    </div>
  )
}
export default Register