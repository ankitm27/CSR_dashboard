import React, { Component } from 'react';
import './Navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Navbar1 extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'Impact',
            SubTitle: 'Scout',
            userName: null
        };
    }

    componentDidMount() {
        this.setState({ userName: this.props.auth && this.props.auth.userName ? this.props.auth.userName : "USER" });
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: '/',
        });
    }

    onClick = (evt) => {
        evt.preventDefault();
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        this.props.history.push({
            pathname: '/login',
        });
    }

    render() {
        return (
            <div className="row Navbar">
                <div className="col-md-10 offset-md-1 mbtopbar">
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Brand onClick={this.onSubmit}><i className="fa fa-circle mr-auto brandName" ></i> {this.state.Title}<span>{this.state.SubTitle}</span></Navbar.Brand>
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
                                <Nav.Link><i className="fa fa-bell"></i></Nav.Link>
                                <NavDropdown title={this.state.userName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item onClick={this.onClick}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

// export default Navbar1;

const mapStateToProps = state => ({
    auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Navbar1));