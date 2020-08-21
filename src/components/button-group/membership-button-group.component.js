import React, { Component } from 'react';

class MembershipButtonGroup extends Component {
    render() {
        return (

            <div className="form-section membership-section">
                <p className="membership-text">Membership</p>

                <div className="classic-silver-mobile">
                    <div className="classic-mobile">
                        <input type="radio" label="Classic" id="classic-radio-unselected" name="membership" />
                        <label className="classic-unselected classic icon" id="classic-radio-unselected" alt="" htmlFor="classic-radio-unselected">
                        </label>
                        <p className="classic-text">Classic</p>
                    </div>


                    <div className="silver-mobile">
                        <input type="radio" label="Silver" id="silver-radio-unselected" name="membership" />
                        <label className="silver-unselected silver icon" id="silver-radio-unselected" alt="" htmlFor="silver-radio-unselected">
                        </label>
                        <p className="silver-text">Silver</p>
                    </div>

                </div>

                <div className="gold-mobile">
                    <input type="radio" label="Gold" id="gold-radio-unselected" name="membership" />
                    <label className="gold-unselected gold icon" id="gold-radio-unselected" alt="" htmlFor="gold-radio-unselected">
                    </label>
                    <p className="gold-text">Gold</p>
                </div>

            </div>

        );
    }
}

export default (MembershipButtonGroup);