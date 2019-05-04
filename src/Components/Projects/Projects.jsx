import React, { Component } from 'react';
import './Projects.css';

// import { connect } from "react-redux";
// import actions from "../../Store/Actions/Index";
// import { withRouter } from "react-router";


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
            Goal: 'Clean water and sustainability ',
            Average: '70%',
            Result: 'Good',
            DaysLeft: '8 Days left',
            Funding: '$1200'
        };
        // console.log("this.props",this.props);
         
    }

    

    render() {
        if(this.props  != null && this.props.programs != null){
            this.setState({ProjectName:this.props.programs.title});
            this.setState({Status:this.props.programs.status});
            this.setState({LastUpdatedAt:this.props.programs.updatedAt});
            this.setState({Description:this.props.programs.description});
            this.setState({Goal:this.props.programs.Goal});
            this.setState({average:this.props.programs.goalAchieved});
            this.setState({Result:"Good"});
            this.setState({DaysLeft:"8 days left"});
            this.setState({Funding:this.props.programs.funding});
        } 
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
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
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