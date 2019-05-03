import React, { Component } from 'react';
import './Navigation.css';
import { Navbar, Brand, Collapse, Nav, NavDropdown, Item } from 'react-bootstrap';


class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            Menu1: 'Home',
            Menu2: 'Previous Project',
            Menu3: 'Draft Project',
            Menu4: 'Settings',
        };
    }
    render() {
        return (
            <div className="row Navigation">
                <div className="col-md-10 offset-md-1 ">
                    <Navbar collapseOnSelect expand="lg" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">{this.state.Menu1}</Nav.Link>
                                <Nav.Link href="#pricing">{this.state.Menu2}</Nav.Link>
                                <Nav.Link href="#features">{this.state.Menu3}</Nav.Link>
                                <Nav.Link href="#pricing">{this.state.Menu4}</Nav.Link>
                            </Nav>

                            <Nav>
                                <input type="search" className="search" />
                                <Nav.Link eventKey={2} href="#memes">
                                    <img src={require('../../assets/images/filter.png')} />
                                </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Navigation;