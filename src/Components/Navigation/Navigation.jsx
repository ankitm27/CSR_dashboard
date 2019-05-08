import React, { Component } from 'react';
import './Navigation.css';
import { Navbar, Brand, Collapse, Nav, NavDropdown, Item } from 'react-bootstrap';
import { Button, Form, InputGroup } from 'react-bootstrap';


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
                                <Nav.Link>{this.state.Menu1}</Nav.Link>
                                <Nav.Link>{this.state.Menu2}</Nav.Link>
                                <Nav.Link>{this.state.Menu3}</Nav.Link>
                                <Nav.Link>{this.state.Menu4}</Nav.Link>
                            </Nav>

                            <Nav>
                                <InputGroup>
                                    <input
                                        type="serch"
                                        placeholder="Search Projects"
                                        className="search" />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                                {/* <Nav.Link eventKey={2} href="#memes">
                                    <img src={require('../../assets/images/filter.png')} />
                                </Nav.Link> */}
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Navigation;