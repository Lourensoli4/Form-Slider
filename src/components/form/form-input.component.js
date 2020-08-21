import React, { Component } from 'react';
import GenderButtonGroup from "../button-group/gender-button-group.component";
import Calender from "../../assets/images/calender.svg";
import MembershipButtonGroup from "../button-group/membership-button-group.component";


class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" }
    }

    clear() {
        this.setState({ value: "" });
    }

    updateValue(event) {
        this.setState({ value: event.target.value });
        this.props.onChangeValue(event);
    }

    render() {

        switch (this.props.type) {
            case "standard":
                return (
                    <div className="form-section">
                        <p>{this.props.label}</p>
                        <input className="form-input" onChange={e => this.updateValue(e)} value={this.state.value} type={this.props.type} required placeholder="Kendall Jenner"></input>
                    </div>
                );
            case "gender":
                return (
                    <div className="gender-section">
                        <GenderButtonGroup />
                    </div>
                );
            case "date":
                return (
                    <div className="form-section">
                        <p>{this.props.label}</p>
                        <input className="form-input" onChange={e => this.updateValue(e)} value={this.state.value} type={this.props.type} required placeholder="01/02/1983"></input>
                        <img className="calender-image" src={Calender} alt="" />
                    </div>
                );
            case "email":
                return (
                    <div className="form-section">
                        <p>{this.props.label}</p>
                        <input className="form-input" onChange={e => this.updateValue(e)} value={this.state.value} type={this.props.type} required placeholder="kendall@email.com"></input>
                    </div>
                );
            case "number":
                return (
                    <div className="form-section">
                        <p>{this.props.label}</p>
                        <input className="form-input" onChange={e => this.updateValue(e)} value={this.state.value} type={this.props.type} required placeholder="+91 98765 43210"></input>
                    </div>
                );
            case "id":
                return (
                    <div className="form-section">
                        <p>{this.props.label}</p>
                        <input className="form-input" onChange={e => this.updateValue(e)} value={this.state.value} type={this.props.type} required placeholder="576802-ERD0348 45"></input>
                    </div>
                );
            case "membership":
                return (
                    <div className="membership-section">
                       <MembershipButtonGroup />
                    </div>
                );
            default:
                return (
                    <div className="form-section">
                    </div>
                );
        }


    }
}

export default (FormInput);