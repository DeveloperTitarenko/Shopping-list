import React from "react";
import './header.css'
import {Button, ButtonGroup, DropdownButton, Dropdown} from "react-bootstrap";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BadgeVisibility from "../btn-badge/btn-badge"

const Header = () => {
  return(
    <div className="header">
      <div className="header-logo">
        <div className="logo">
          <div className="right"></div>
          <div className="left"></div>
        </div>
        <h1 className="heading">Screening <span>Tool</span></h1>
      </div>

        <nav className="header-nav">
          <ul>
            <li><a href="http://localhost:3000/table">Dashboard</a> </li>
            <li><a href="#">Clients</a> </li>
            <li><a href="#">Poll Template</a></li>
          </ul>
        </nav>
        <div className="header-btn">
          <BadgeVisibility/>
          <ButtonGroup className="header-btn-group">
            <Button><PersonOutlineIcon/></Button>
            <Button>Mark</Button>
            <Button>Admin</Button>
            <DropdownButton as={ButtonGroup} title="" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
    </div>
  )
}
export default Header