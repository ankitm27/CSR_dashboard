import React, { Component } from 'react';
import './ProjectResult.css';
import Table from 'react-bootstrap/Table';
import ModalContent from '../ModalContent/ModalContent';
import { Modal, Button, Header } from 'react-bootstrap';

import { connect } from "react-redux";
import actions from "../../Store/Actions/Index";
import { withRouter } from "react-router";



class ProjectResults extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        //     Beneficiary: 'Eliza Willis',
        //     Date: '05 Sep 2019',
        //     TatalDetail: '20',
        //     UnverfiedDetail: '19',
        //     TotalRules: '20',
        //     UnfollowedRules: '19',
        //     Risk: 'High',
        //     Action: 'View  Details',
            show: false,
        };
        this.data = [{
            Beneficiary: null,
            Date: null,
            TatalDetail: null,
            UnverfiedDetail: null,
            TotalRules: null,
            UnfollowedRules: null,
            Risk: null,
            Action: null,
            show: null,
        }]
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }

    async componentDidMount() {
        await this.props.projectDetails({_id:this.props.location.state._id});
        console.log("this. props",this.props);    
        // this.data = this.props.project.users;
        console.log("this.data");
    }

    render() {
        return (
            <div className="row ProjectResult">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="chartheading">Beneficiary Details</p>
                        </div>
                        <div className="col-md-12 resultchart"></div>
                    </div>
                </div>
                <div className="col-md-5 offset-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="chartheading">Rules</p>
                        </div>
                        <div className="col-md-12 resultchart"></div>
                    </div>
                </div>


                <div className="col-md-12 resulttable">
                    <Table  >
                        <thead>
                            <tr>
                                <th>Beneficiary</th>
                                <th>Date</th>
                                <th>Total Detail</th>
                                <th>Unverfied Detail</th>
                                <th>Total Rules</th>
                                <th>Unfollowed Rules</th>
                                <th>Risk</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.data.map(dataObj =>
                                <tr>
                                    <td>{dataObj.Beneficiary}</td>
                                    <td>{dataObj.Date}</td>
                                    <td>{dataObj.TatalDetail}</td>
                                    <td>{dataObj.UnverfiedDetail}</td>
                                    <td>{dataObj.TotalRules}</td>
                                    <td>{dataObj.UnfollowedRules}</td>
                                    <td><button className="btn btn-risk">{dataObj.Risk}</button></td>
                                    <td><a className="action" onClick={this.handleShow}>{dataObj.Action}</a></td>       
                                </tr>
                            )}  
                        </tbody>
                    </Table>

                </div>


                <Modal show={this.state.show} onHide={this.handleClose}  size="lg">
                    <Modal.Header closeButton>
                        <ModalContent />
                    </Modal.Header>
                    <Modal.Body>  </Modal.Body>

                </Modal>

            </div>
        );
    }
}

// export default ProjectResults;

function mapStateToProps(state) {
    console.log("state",state);
    return {
        project: state.Projects
    }
}

const mapDispatchToProps = dispatch => ({
    projectDetails: (v) => dispatch(actions.projectDetails(v)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectResults));
