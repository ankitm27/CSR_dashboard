import React, { Component } from 'react';
import './ModalContent.css';

import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Tab1 from './Tab1content/Tab1content';
import Tab2 from './Tab2content/Tab2content'


class ModalContent extends Component {
    constructor() {
        super();
        this.state = {
            tab1: 'Benefitiery Details',
            tab2: 'Rules'
        };
    }

    render() {
        console.log("this props",this.props);
        return (
            <div className="row ModalContents">
                <div className="col-md-12 tabs">
                    <div className="row">

                        <div className="col-md-12">
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title={this.state.tab1}>
                                    <Tab1 userId={this.props.selectedUser} />
                                </Tab>
                                <Tab eventKey="profile" title={this.state.tab2}>
                                    <Tab2 userId={this.props.selectedUser} />
                                </Tab>
                            </Tabs>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ModalContent;