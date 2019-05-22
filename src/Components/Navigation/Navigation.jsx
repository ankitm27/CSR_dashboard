import React, { Component } from 'react';
import './Navigation.css';
import { Navbar, Nav} from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';


import { connect } from "react-redux";
import { withRouter } from "react-router";


class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            Menu1: 'Home',
            Menu2: 'Previous Project',
            Menu3: 'Draft Project',
            Menu4: 'Settings',
            searchProject:null
        };
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname:'/',
        });
    }

    searchProjects = (evt) => {
        evt.preventDefault();
        this.props.projectFunction(evt.target.value);
    }

    renderSearch = () => {
        return (
            <Nav>
                <InputGroup>
                    <input
                        type="serch"
                        placeholder="Search Projects"
                        className="search searchText" 
                        value={this.state.query}     
                        onChange={this.searchProjects}
                    />
                    {/* <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                    </InputGroup.Prepend> */}
                </InputGroup>
                <Nav.Link eventKey={2}>
                    <img src={require('../../assets/images/filter.png') } alt=""/>
                </Nav.Link>
            </Nav>
        )
    }

    render() {
        let searchBar;
        const isSearchRequired = this.props && this.props.isSearchRequired ? true : false;
        if(isSearchRequired){
            searchBar = this.renderSearch();
        }
        return (
            <div className="row Navigation">
                <div className="col-md-10 offset-md-1 ">
                    <Navbar collapseOnSelect expand="lg" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link onClick={this.onSubmit}>{this.state.Menu1}</Nav.Link>
                                <Nav.Link>{this.state.Menu2}</Nav.Link>
                                <Nav.Link>{this.state.Menu3}</Nav.Link>
                                <Nav.Link>{this.state.Menu4}</Nav.Link>
                            </Nav>
                            {searchBar}
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}


// export default Navigation;

const mapStateToProps = state => ({
    auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Navigation));