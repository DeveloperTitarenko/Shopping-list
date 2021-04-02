import React from "react";
import {Button, Form} from "react-bootstrap";
import {AiOutlineGoogle} from "react-icons/ai";
import {ImFacebook} from "react-icons/im";
import {useHistory} from "react-router-dom";

const SignIn = () => {

  const history = useHistory();

  return (
    <div className="authorization-right-signin">
      <Form>
        <h1>SIGN IN</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="primary" size="lg" block>
          Sign In
        </Button>
        <Button variant="link" size="lg" block onClick={() => history.push('/register')}>
          Register
        </Button>

        <Button variant="danger" size="lg" block>
          <AiOutlineGoogle/>
          SIGN IN WITH GOGGLE
        </Button>
        <Button variant="primary" size="lg" block>
          <ImFacebook/>
          SIGN IN WITH FACEBOOK
        </Button>
      </Form>
    </div>
  )
}
export default SignIn