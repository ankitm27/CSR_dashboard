import React, { Component } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import Graph from '../ColumChart/Colum';
import Pie from '../PieChart/PieChart';
import { connect } from "react-redux";
import actions from "../../Store/Actions/Index";
import { withRouter } from "react-router";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            TotalFunding: null,
            TotalProjects: null,
            GoalAchived: null,
            TotalGood: null,
            TotalAverage: null,
            TotalPoor: null,
            TotalStatus: null,
            Programs: null,
            Title: 'Projects',
            Button: 'Create New Project'
        };
    }

    async componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push({
                pathname: '/login',
            });
        }

        await this.props.dashboardData();
        console.log("this props projects",this.props.projects);
        this.setState({ TotalFunding: this.props.projects.totalFunding });
        this.setState({ TotalProjects: this.props.projects.totalProgram });
        this.setState({ GoalAchived: this.props.projects.goalAchievedAvg });
        this.setState({ TotalGood: this.props.projects.overallGood });
        this.setState({ TotalAverage: this.props.projects.overallAverage });
        this.setState({ TotalPoor: this.props.projects.overallBad });
        this.setState({ TotalStatus: this.props.projects.overallStatus });
        this.setState({ Programs: this.props.projects.programs });
        
    }

    onClick = () => {
        this.props.history.push({
            pathname: '/createproject',
        });

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
                                <div className="col-md-3 funding">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Overall Funding</p>
                                            <h1>{this.state.TotalFunding}</h1>
                                        </div>
                                        <div className="col-md-12">
                                            <p>Total Project</p>
                                            <h1>{this.state.TotalProjects}</h1>
                                        </div>
                                        <div className="col-md-11  text-left goalachived1">
                                            <p> {this.state.GoalAchived}  Goal Achieved </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9 graph">
                                    <Graph projects={this.state.Programs} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pie">
                            <div className="row mbgpie">
                                <div className="col-md-12 result">
                                    <p>Result</p>
                                </div>
                                <div className="col-md-12 result">
                                    <h1>  <img src={require('../../assets/images/rank.png')} width="30" /> {this.state.TotalStatus}  </h1>
                                </div>
                                <div className="col-md-12 pie">
                                    <Pie />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-10 offset-md-1 mbtitile">
                    <div className="row">
                        <div className="col-md-6 text-left heading">
                            <p>{this.state.Title}</p>
                        </div>
                        <div className="col-md-6 text-right create">
                            <p><a onClick={this.onClick}>{this.state.Button}  <button className="add"><img src={require('../../assets/images/group-5.png')} width="30" /></button></a></p>
                        </div>

                    </div>
                </div>

                <div className="col-md-10 offset-md-1">
                    <div className="row">
                        {this.state && this.state.Programs && this.state.Programs.map((Program, index) => (
                            <div key={Program._id} className="col-md-4 projectlist">
                                <Projects programs={Program} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.Projects
    }
}

const mapDispatchToProps = dispatch => ({
    dashboardData: (v) => dispatch(actions.dashboardData(v)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
