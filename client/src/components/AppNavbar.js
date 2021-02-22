import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends React.Component {
    state = {
        isOpen: false
    }

    toggle = () => {
       this.setState({
           isOpen: !this.state.isOpen
       });
    }

    render(){
        return (
          <div>
              <Navbar color="dark" dark expand="sm" className="mb-5">
                  <Container>
                      <NavbarBrand href="/">Shopping list</NavbarBrand>
                      <NavbarToggler onClick={this.toggle} />
                      <Collapse isOpen={this.state.isOpen} navbar>
                          <Nav className="ml-auto" navabr>
                            <NavItem>
                                <NavLink href="https://github.com/Grumpyyash">Github</NavLink>
                            </NavItem>
                          </Nav>
                      </Collapse>
                  </Container>
              </Navbar>
          </div>
        );
    }
}
export default AppNavbar;