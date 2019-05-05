import React, { Component } from 'react';
import './ProjectDetails.css';
import Navbar from '../Navbar/Navbar';
import Tab1 from '../Details/Details';
import Tab2 from '../ProjectResult/ProjectResult';

import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


class ProjectDetails extends Component {
    constructor() {
        super();
        this.state = {
            tab1: 'Project Details',
            tab2: 'Project Result'
        };
    }

    


    render() {
        return (
            <div className="row ProjectDetail">
                <div className="col-md-12 topbar">
                    <Navbar />
                </div>

                <div className="col-md-12 tabs">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-1 ">
                                    <Button variant="secondary" className="back"><i className="	fa fa-angle-left"></i> Back</Button>
                                </div>
                                <div className="col-md-11">
                                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                        <Tab eventKey="home" title={this.state.tab1}>
                                            <Tab1 />
                                        </Tab>
                                        <Tab eventKey="profile" title={this.state.tab2}>
                                            <Tab2 />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         projectDetails: state.ProjectDetails
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     projectDetails: (v) => dispatch(actions.projectDetails(v)),
// });


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetails));


export default ProjectDetails;