import React, { Component } from 'react';
import './Navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class Navbar1 extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'Impact',
            SubTitle: 'Scout',
            userName: null
        };
        this.onClickProfile = this.onClickProfile.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    componentDidMount() {
        this.setState({ userName: localStorage.getItem("userName") ? localStorage.getItem("userName") : "USER" });
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
        localStorage.removeItem("userName");
        this.props.history.push({
            pathname: '/login',
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    onClickProfile = () => {
        this.setState({ show: true });
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
                                    <NavDropdown.Item onClick={this.onClickProfile}>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={this.onClick}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                
                <Modal show={this.state.show} onHide={this.handleClose} className="modal-size">
                    <Modal.Header closeButton>
                        <div className="row col-md-12">
                            <Modal.Title className="col-md-6 heading-details">User Detail</Modal.Title>
                            <Modal.Title className="col-md-6 shape"><img className="pull-right" src={require('../../assets/images/shape.png')} alt="" /></Modal.Title>
                        </div>   
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <div className="row">
                            <div className="col-md-12 image"> 
                                <div className="row">
                                    <div className="col-md-3 image right-border left-padding">
                                        <img className="profile-image" src={require('../../assets/images/bitmap.png')} alt="" />
                                    </div>
                                    <div className="col-md-9 image left-padding-right">
                                        <div className="col-md-12 box-height">
                                            <p className="profile-heading">Employee Code: <span className="data">1234</span></p>
                                        </div>
                                        <div className="col-md-9 box-height">
                                            <p className="profile-heading">Name: <span className="data">check</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 box-height left-padding">
                                <p className="profile-heading">Role: <span className="data">Manager</span></p>
                            </div>
                            <div className="col-md-12 box-height left-padding">
                                <p className="profile-heading">Email Id: <span className="data">test@gmail.com</span></p>
                            </div>
                            <div className="col-md-12 box-height left-padding">
                                <p className="profile-heading">Phone Number: <span className="data">9090909090</span></p>
                            </div>
                            <div className="col-md-12 box-height left-padding ">
                                <p className="profile-heading">Location: <span className="data">Noida</span></p>
                            </div>
                            <div className="col-md-12 box-height left-padding">
                                <p className="profile-heading">Access Type: <span className="data">Admin</span></p>
                            </div>
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer>

                        <Button variant="primary" onClick={this.handleClose} className="submit">
                            Close
                        </Button>
                    </Modal.Footer> */}
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Navbar1));