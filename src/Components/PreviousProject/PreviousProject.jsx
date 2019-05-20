import React from 'react';
import './PreviousProject.css';

class PreviousProject extends React.Component{
    render(){
        const cards = [1,2,3,4,5,6]
        return (
            <div className="container sideSpacing">
                <div className="row">
                { cards.map((i) => {
                    return (
                        <div key={i} className="col-lg-4 col-md-4 col-sm-12 rounded ">
                            <div className="card p-4">
                            <div className="card-body">
                                <p className="card-text">Product</p>
                                <p className="text-secondary"><small>1/23/2017</small></p>
                                <p><small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small></p>
                                <p className="">Goal:<span className="text-secondary pl-2"><small>Clean water and sustainability</small></span></p>
                                <div className="pl-3 pt-1 pb-1 text-primary fontFamilyForGoal">
                                    <span className="text-primary">Goal Achieved</span>
                                    <p className="float-right pr-2">70%</p>
                                </div>
                                <hr></hr>
                                <span>result</span>
                                <p className="text-secondary float-right">Good</p>
                                <div className="progress decreasingHeight">
                                    <div className="progress-bar bg-success progressDiv1" ></div>
                                    <div className="progress-bar bg-warning progressDiv1" ></div>
                                    <div className="progress-bar bg-danger progressDiv1"></div>
                                </div>
                                <hr></hr>
                                <p>funding: <span className="pl-2">$1200</span>
                                </p>
                            </div>
                        </div>
                    </div>)})}
            </div>
        </div>
        );
    }
}

export default PreviousProject;
