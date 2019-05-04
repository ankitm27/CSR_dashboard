import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'Projects',
            Button: 'Create New Project'
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
                    <div className="row projectcard"></div>
                </div>

            </div>
        );
    }
}

export default Projects;