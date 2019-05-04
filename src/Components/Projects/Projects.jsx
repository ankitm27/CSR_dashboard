import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'Projects',
            Button: 'Create New Project',
            ProjectName: 'Project 1',
            Status: 'Open',
            LastUpdatedAt: '5 hours ago',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            Goal: 'Clean water and sustainability ',
            Average: '70%',
            Result: 'Good',
            DaysLeft: '8 Days left',
            Funding: '$1200'
        };
    }
    render() {
        return (
            <div className="row Projects">
                <div className="col-md-6 text-left heading">
                    <p>{this.state.Title}</p>
                </div>
                <div className="col-md-6 text-right create">
                    <p><a>{this.state.Button}  <button className="add"><img src={require('../../assets/images/group-5.png')} width="30" /></button></a></p>
                </div>

                <div className="col-md-4 projectlist">
                    <div className="row projectcard">
                        <div className="col-md-6 left">
                            <h1>{this.state.ProjectName}</h1>
                            <p>{this.state.LastUpdatedAt}</p>
                        </div>
                        <div className="col-md-6 right text-right">
                            <button type="button" class="btn btn-status"> <i className="fa  fa-circle"></i> {this.state.Status}</button>
                        </div>
                        <div className="col-md-12  text-left description">
                            <p>{this.state.Description}</p>
                        </div>
                        <div className="col-md-12  text-left goal">
                            <p>Goal : <span>{this.state.Goal}</span></p>
                        </div>
                        <div className="col-md-11  text-left goalachived">
                            <p>Goal Achieved <span className="text-right"> {this.state.Average}</span></p>
                        </div>
                        <hr></hr>

                        <div className="col-md-12  text-left result">
                            <p>Result <span className="text-right"> {this.state.Result}</span></p>
                        </div>
                        <div className="col-md-12">
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: '15%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="col-md-6">
                            <button type="button" class="btn btn-daysleft"> <i className="fa fa-clock-o"></i> {this.state.DaysLeft}</button>
                        </div>
                        <div className="col-md-6  text-left funding">
                            <p>Funding: {this.state.Funding}</p>
                        </div>
                    </div>
                </div>













            </div>
        );
    }
}

export default Projects;