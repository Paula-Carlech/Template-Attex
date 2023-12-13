import React from 'react'
import { Container } from 'react-bootstrap'
import AppMenu from './Menu'
import { getHorizontalMenuItems } from '../../helpers/menu'

const NavBar = () => {
  return (
    <div className="topnav">
      <Container fluid>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <AppMenu menuItems={getHorizontalMenuItems()}/>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default NavBar