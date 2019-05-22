import React from 'react';
import './PreviousProject.css';
import Navbar from '../Navbar/Navbar';
import Navigation from '../Navigation/Navigation';

class PreviousProject extends React.Component{
    constructor() {
        super();
        this.state = {
            data:[1,2,3,4,5,6]
        };
    }
    render(){
        return (
            <div className="row PreviousProject">
                <div className="col-md-12 topbar">
                    <Navbar userName={this.props.auth} />
                    <Navigation projectFunction={this.handleData} />
                </div>
            <div className="col-md-10 offset-md-1 mbtotal">
                <div className="row">
                {this.state.data.map(i => (
                    <div key={i} className="col-md-4">
                        <div className="row Projects">
                        <div className="col-md-4 projectlist">
                            <div className="row projectcard">
                                <div className="col-md-12 left">
                                    <h6>Project 1</h6>
                                    <p>1/23/2018</p>
                                </div>
                                <div className="col-md-12  text-left description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <div className="col-md-12  text-left goal">
                                    <p>Goal : <span>clean</span></p>
                                </div>
                                <div className="col-md-11  text-left goalachived">
                                    <p>Goal Achieved <span className="text-right">77%</span></p>
                                </div>
                                <hr></hr>

                                <div className="col-md-12  text-left result">
                                    <p>Result <span className="text-right">Good</span></p>
                                </div>
                                <div className="col-md-12">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="col-md-12  text-left fund">
                                    <p>Funding: $1200 </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
        </div>
        </div>
        );
    }
}

export default PreviousProject;
