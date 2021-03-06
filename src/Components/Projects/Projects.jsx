import React, { Component } from 'react';
import './Projects.css';

import { withRouter } from "react-router";

const DateDiff = require('date-diff');

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
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: '/detail',
            state: {
                _id: this.props.programs._id
            }
        });
    }

    render() {
        const { programs } = this.props;
        const date1 = new Date();
        const date2 = new Date(programs.updatedAt);
        const lastUpdatedAt = parseInt(new DateDiff(date1, date2).days());
        const date3 = new Date(programs.endDate);
        const daysLeft = parseInt(new DateDiff(date3, date1).days());
        return (
            <div className="row Projects">

                <div className="col-md-4 projectlist">
                    <div className="row projectcard">
                        <div className="col-md-6 left">
                            <h1 onClick={this.onSubmit}>{programs.title}</h1>
                            <p>{lastUpdatedAt} days ago</p>
                        </div>
                        <div className="col-md-6 right text-right">
                            <button type="button" className="btn btn-status"> <i className="fa  fa-circle"></i> {programs.status}</button>
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
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="col-md-6">
                            <button type="button" className="btn btn-daysleft"> <i className="fa fa-clock-o"></i> {daysLeft} days left</button>
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

export default withRouter(Projects);