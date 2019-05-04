import React, { Component } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            TotalFunding: '$2878.90',
            TotalProjects: '6',
            TotalGood: 'Good',
            TotalAverage: '16%',
            TotalPoor: '4%',
            OverAllSteets: '80%',
        };
    }
    render() {
        return (
            <div className="row Dashboard">
                <div className="col-md-12 topbar">
                    <Navbar />
                    <Navigation />
                </div>

                <div className="col-md-10 offset-md-1 mbtotal">
                    <div className="row">
                        <div className="col-md-8 graph">
                            <div className="row mbgraph">
                                <div className="col-md-4 funding">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Overall Funding</p>
                                            <h1>{this.state.TotalFunding}</h1>
                                        </div>
                                        <div className="col-md-12">
                                            <p>Total Project</p>
                                            <h1>{this.state.TotalProjects}</h1>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-8 graph"></div>
                            </div>
                        </div>
                        <div className="col-md-4 pie">
                            <div className="row mbgpie">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-10 offset-md-1 mbProject">
                    <Projects />
                </div>
            </div>
        );
    }
}

export default Dashboard;