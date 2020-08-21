import React, { Component } from 'react';
import FormInput from './form-input.component';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state={}
        this.form = {
            name: React.createRef(),
            gender: React.createRef(),
            dob: React.createRef(),
            email: React.createRef(),
            mobile: React.createRef(),
            id: React.createRef(),
            membership: React.createRef()
        }
    }

    updateValue(event) {
        this.setState({ name: event.target.value });
        console.log(event.target.value);
    }

    clear(event) {
        event.preventDefault();
        this.form.name.current.clear();
        this.form.gender.current.clear();
        this.form.dob.current.clear();
        this.form.email.current.clear();
        this.form.mobile.current.clear();
        this.form.id.current.clear();
        this.form.membership.current.clear();
    }

    render() {
        return (

            <form className="form">
                <div className="form-div">

                    <FormInput ref={this.form.name} onChangeValue={e => this.updateValue(e)} value={this.state.name} label="Name" type="standard" class="top-field" />

                    <FormInput ref={this.form.gender} onChangeValue={e => this.updateValue(e)} value={this.state.gender} label="Gender" type="gender" />

                    <FormInput ref={this.form.dob} onChangeValue={e => this.updateValue(e)} value={this.state.dob} label="Date of Birth" type="date" />

                    <FormInput ref={this.form.email} onChangeValue={e => this.updateValue(e)} value={this.state.email} label="Email" type="email" />

                    <FormInput ref={this.form.mobile} onChangeValue={e => this.updateValue(e)} value={this.state.mobile} label="Mobile" type="number" />

                    <FormInput ref={this.form.id} onChangeValue={e => this.updateValue(e)} value={this.state.id} label="Customer ID" type="id" />

                    <FormInput ref={this.form.membership} onChangeValue={e => this.updateValue(e)} value={this.state.membership} label="Membership" type="membership" />

                    <div className="buttons">
                        <button className="cancel-button" onClick={e => this.clear(e)}>
                            <p className="cancel">CANCEL</p>
                        </button>
                        <button className="save-button">
                            <p className="save">SAVE</p>
                        </button>
                    </div>

                </div>
            </form>
        )
    }
}

export default Form;