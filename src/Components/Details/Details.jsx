import React, { Component } from 'react';
import './Details.css';
import Button from 'react-bootstrap/Button'



class Detail extends Component {
    constructor() {
        super();
        this.state = {
            ProjectName: 'Mukesh Bhardwaj',
            ProjectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet.',
            ProjectTarget: 'Clean water and sustainability ',
            ProjectSuccess: '80%',
            TotalFund: '$12000',
            Villages: '12',
            PerUnitFund: '$1000',
            ProjectManger: '$1000',
            EmailID: 'sven_mann@ursula.net',
            Location: 'Delhi',
            Phone: '9999000021',
            ExecuterCompany: 'NGO NAME',
            ExecuterManager: 'Mukesh Bhardwaj',
            ExecuterEmail: 'bhardwaj.mukesh91@gmail.com',
            ExecuterLocation: 'Delhi',
            ExecuterNumber: '9999000021',
            Daysleft: '4 Days left'

        };
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

export default Detail;