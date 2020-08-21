import React, { Component } from 'react';
import IconButton from "../buttons/icon-button.component";
import toggleIcon from "../../assets/images/toggle-right.png";
import toggleLeft from "../../assets/images/toggle-left.png";
import pP from "../../assets/images/pp.svg";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = { toggle: false };
    }

    updateToggle() {
        this.setState({ toggle: !this.state.toggle });
        this.props.onToggled(this.state.toggle);
    }

    render() {
        return (
            <div className="left">
                <div>
                    <img className="profile-picture" src={pP} alt=""></img>
                </div>
                <div>
                    <h1 className="challenge-heading">Front-end challenge!</h1>
                </div>
                <div className="challenge-text-mobile">
                    <p className="challenge-text">
                        This is a design that you need to code up and impress us.
        </p>
                </div>


                <div className={`toggle-icon-mobile ${this.state.toggle ? "" : "deg1"}`} onClick={e => this.updateToggle()}>
                    <IconButton unSelectedIcon={toggleIcon} selectedIcon={toggleIcon} label="" />
                </div>

                <div className={`toggle-icon ${this.state.toggle ? "" : "deg1"}`} onClick={e => this.updateToggle()}>
                    <IconButton unSelectedIcon={toggleIcon} selectedIcon={toggleIcon} label="" />
                </div>
            </div>
        )
    }

}

export default Sidebar;