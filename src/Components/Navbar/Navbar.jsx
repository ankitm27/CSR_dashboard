import React, { Component } from 'react';
import './Navbar.css';
import { Navbar, Brand, Collapse, Nav, NavDropdown, Item } from 'react-bootstrap';


class Navbar1 extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'Impact',
            SubTitle: 'Scout',
            UserName: 'Mukesh',
        };
    }
    render() {
        return (
            <div className="row Navbar">
                <div className="col-md-10 offset-md-1 mbtopbar">
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Brand href="#home"><i className="fa  fa-circle"></i> {this.state.Title}<span>{this.state.SubTitle}</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                {/* <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><i className="fa fa-bell"></i></Nav.Link>
                                <NavDropdown title={this.state.UserName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Navbar1;