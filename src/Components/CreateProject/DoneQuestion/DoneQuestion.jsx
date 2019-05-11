import React, { Component } from 'react';
import './DoneQuestion.css';


class Done extends Component {
    constructor() {
        super();
        this.state = {
            Question: null,
            QuestionType: null,
            Option: null,
        };
    }


    onload = (evt) => {
        evt.preventDefault();
        console.log("this props location state", this.props.location.state);
        alert("hy");
        document.getElementById("donequestion").style.display = "block";
        this.props.history.push('/createproject5');
        return;
    }



    render() {
        return (
            <div className="row Project" onChange={this.onload}>
                <div className="col-md-12 donequestion" id="donequestion">
                    <img src={require('../../../assets/images/group-8.svg')} alt="" className="pencil" />
                    <p>{this.state.Question}  </p>
                </div>
            </div>
        );
    }
}

export default Done;