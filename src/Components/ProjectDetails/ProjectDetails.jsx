import React, { Component } from 'react';
import './ProjectDetails.css';
import Navbar from '../Navbar/Navbar';
import Tab1 from '../Details/Details';
import Tab2 from '../ProjectResult/ProjectResult';

import { Tab, Tabs } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation.jsx';

class ProjectDetails extends Component {
    constructor() {
        super();
        this.state = {
            tab1: 'Project Details',
            tab2: 'Project Result'
        };
    }

    componentDidMount() {
        if(!this.props.location.state || !this.props.location.state._id){
            this.props.history.push({
                pathname:'/',
            });
        }
    }

    


    render() {
        return (
            <div className="row ProjectDetail">
                <div className="col-md-12 topbar">
                    <Navbar />
                    <Navigation />
                </div>

                <div className="col-md-12 tabs">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                        <Tab eventKey="home" title={this.state.tab1}>
                                            <div className="col-md-12">
                                                <Tab1 />
                                            </div>
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