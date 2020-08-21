import React, { Component } from 'react';

class GenderButtonGroup extends Component {

    render() {
        return (

            <div className="form-section gender-section">
                <p className="gender-text">Gender</p>

                <div className="gender-mobile">
                    <div className="male-side">
                        <input type="radio" className="this" label="Male" id="male-radio-unselected" name="gender" />
                        <label className="male-unselected male icon" htmlFor="male-radio-unselected">
                        </label>
                        <p className="male-text">Male</p>
                    </div>

                    <div className="female-side">
                        <input type="radio" label="Female" id="female-radio-unselected" name="gender" />
                        <label className="female-unselected female icon" htmlFor="female-radio-unselected">
                        </label>
                        <p className="female-text">Female</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default (GenderButtonGroup);