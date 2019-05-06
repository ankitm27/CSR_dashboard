import React, { Component } from 'react';
import './Projects.css';

import { connect } from "react-redux";
import actions from "../../Store/Actions/Index";
import { withRouter } from "react-router";


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            Title: null,
            Button: null,
            ProjectName: null,
            Status: null,
            LastUpdatedAt: null,
            Description: null,
            Goal: null,
            Average: null,
            Result: null,
            DaysLeft: null,
            Funding: null
        };
        // alert("this.props", this.props.programs);

        // this.setState({ ProjectName: this.props.Programs.title });
        // this.setState({ Status: this.props.Programs.status });
        // this.setState({ LastUpdatedAt: this.props.Programs.updatedAt });
        // this.setState({ Description: this.props.Programs.description });
        // this.setState({ Goal: this.props.Programs.Goal });
        // this.setState({ average: this.props.Programs.goalAchieved });
        // this.setState({ Result: "Good" });
        // this.setState({ DaysLeft: "8 days left" });
        // this.setState({ Funding: this.props.Programs.funding });

    }

    render() {
        const { programs } = this.props;
        return (
            <div className="row Projects">

                <div className="col-md-4 projectlist">
                    <div className="row projectcard">
                        <div className="col-md-6 left">
                            <h1>{programs.title}</h1>
                            <p>{programs.updatedAt}</p>
                        </div>
                        <div className="col-md-6 right text-right">
                            <button type="button" class="btn btn-status"> <i className="fa  fa-circle"></i> {programs.Status}</button>
                        </div>
                        <div className="col-md-12  text-left description">
                            <p>{programs.description}</p>
                        </div>
                        <div className="col-md-12  text-left goal">
                            <p>Goal : <span>{programs.goal}</span></p>
                        </div>
                        <div className="col-md-11  text-left goalachived">
                            <p>Goal Achieved <span className="text-right"> {programs.goalAchieved}</span></p>
                        </div>
                        <hr></hr>

                        <div className="col-md-12  text-left result">
                            <p>Result <span className="text-right"> {programs.Result}</span></p>
                        </div>
                        <div className="col-md-12">
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="col-md-6">
                            <button type="button" class="btn btn-daysleft"> <i className="fa fa-clock-o"></i> {programs.endDate}</button>
                        </div>
                        <div className="col-md-6  text-left funding">
                            <p>Funding: {programs.funding}</p>
                        </div>
                    </div>
                </div>

            </div>

        );

    }
}



export default Projects;