import React, { Component } from 'react';
import './Details.css';
import Button from 'react-bootstrap/Button'

import { connect } from "react-redux";
import actions from "../../Store/Actions/Index";
import { withRouter } from "react-router";


class Detail extends Component {
    constructor() {
        super();
        this.state = {
            ProjectName: null,
            ProjectDescription: null,
            ProjectTarget: null,
            ProjectSuccess: null,
            TotalFund: null,
            Villages: null,
            PerUnitFund: null,
            ProjectManger: null,
            EmailID: null,
            Location: null,
            Phone: null,
            ExecuterCompany: null,
            ExecuterManager: null,
            ExecuterEmail: null,
            ExecuterLocation: null,
            ExecuterNumber: null,
            Daysleft: null
        };
    }

    async componentDidMount() {
        await this.props.projectDetails({_id:this.props.location.state._id});
        console.log("this props",this.props);
        console.log("this props projects",this.props.project);
        const project = this.props.project;
        this.setState({ ProjectName: project.title ? project.title : "" });
        this.setState({ProjectDescription:project.description ? project.description : ""})
        this.setState({ ProjectTarget: project.goal ? project.goal : "" });
        this.setState({ ProjectSuccess: project.goalAchieved ? project.goalAchieved : "" });
        this.setState({ Villages: project.totalAreaCovered ? project.totalAreaCovered : ""});
        this.setState({ PerUnitFund: project.fundingPerBeneficiary ? project.fundingPerBeneficiary : "" });
        this.setState({ ProjectManager: project.supervisor && project.supervisor.managerName ? project.supervisor.managerName : "" });
        this.setState({ EmailID: project.supervisor && project.supervisor.email ? project.supervisor.email : "" });
        this.setState({ Location: project.supervisor && project.supervisor.location ? project.supervisor.location : ""});
        this.setState({ Phone: project.supervisor && project.supervisor.mobile ? project.supervisor.mobile : "" });
        this.setState({ ExecuterManager: project.ngo && project.ngo.managerName ? project.ngo.managerName : null });
        this.setState({ ExecuterCompany: project.ngo && project.ngo.ngoName ? project.ngo.ngoName : null });
        this.setState({ ExecuterLocation: project.ngo && project.ngo.managerName ? project.ngo.managerName : null });
        this.setState({ ExecuterNumber: project.ngo && project.ngo.mobile ? project.ngo.mobile : null });
        this.setState({ Daysleft: project.endDate ? project.endDate : null });
        this.setState({ TotalFund: project.funding ? project.funding : null});
    }


    render() {
        return (
            <div className="row Details">
                <div className="col-md-6 ProjectName">
                    <h1>{this.state.ProjectName}</h1>
                </div>
                <div className="col-md-6 text-right">
                    <Button variant="secondary" className="daysleft"><i className="fa fa-clock-o"></i> {this.state.Daysleft}</Button>
                </div>

                <div className="col-md-12 text-left projectdescription">
                    <p>{this.state.ProjectDescription}</p>
                </div>

                <div className="col-md-12 text-left projecttarget">
                    <p>Project Target : <span>{this.state.ProjectTarget}</span></p>
                </div>



                <div className="col-md-3 text-left projectsucess">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={require('../../assets/images/group-4.svg')} />
                        </div>
                        <div className="col-md-8 successstory">
                            <h1>{this.state.ProjectSuccess}</h1>
                            <p>Project Success</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 text-left projectsucess">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={require('../../assets/images/group-6.svg')} />
                        </div>
                        <div className="col-md-8 successstory">
                            <h1>{this.state.TotalFund}</h1>
                            <p>Total Fund</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-left projectsucess">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={require('../../assets/images/group-13.svg')} />
                        </div>
                        <div className="col-md-8 successstory">
                            <h1>{this.state.Villages}</h1>
                            <p>Villages</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-left projectsucess">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={require('../../assets/images/group-14.svg')} />
                        </div>
                        <div className="col-md-8 successstory">
                            <h1>{this.state.PerUnitFund}</h1>
                            <p>Per Unit Fund</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-12 ">
                    <div className="row projectdetails">
                        <div className="col-md-5 details">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Project Handle By </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-15.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Project Manager</p>
                                            <h1>{this.state.ProjectManager}</h1>
                                        </div>
                                    </div>

                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-15.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Location</p>
                                            <h1>{this.state.Location}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-16.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Email Id</p>
                                            <h1>{this.state.EmailID}</h1>
                                        </div>
                                    </div>
                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-15.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Mobile No.</p>
                                            <h1>{this.state.Phone}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2 details">

                            <div className="row">
                                <div className="col-md-12">
                                    <p>{this.state.ExecuterCompany}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-15.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Project Manager</p>
                                            <h1>{this.state.ExecuterManager}</h1>
                                        </div>
                                    </div>

                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-15.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Location</p>
                                            <h1>{this.state.Location}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-16.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Email Id</p>
                                            <h1>{this.state.EmailID}</h1>
                                        </div>
                                    </div>
                                    <div className="row mb50">
                                        <div className="col-md-3">
                                            <img src={require('../../assets/images/group-15.svg')} width="40px" />
                                        </div>
                                        <div className="col-md-9 exicute">
                                            <p>Mobile No.</p>
                                            <h1>{this.state.ExecuterNumber}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state",state);
    return {
        project: state.Projects
    }
}

const mapDispatchToProps = dispatch => ({
    projectDetails: (v) => dispatch(actions.projectDetails(v)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
