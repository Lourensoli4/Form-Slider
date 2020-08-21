import React, { Component } from 'react';

class IconButton extends Component {

    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.updateSelected=this.updateSelected.bind(this);
    }

    updateSelected(event) {
        event.preventDefault();
        this.setState({selected:!this.state.selected});
    }

    render() {

        if (this.state.selected) {
            return (

                <div>
                    <button onClick={e=>this.updateSelected(e)}>
                        <img className={this.props.imageClass} src={this.props.selectedIcon} alt=""></img>
                    </button>
                    <label>{this.props.label}</label>
                </div>

            );
        } else {
            return (

                <div>
                    <button onClick={this.updateSelected}>
                        <img className={this.props.imageClass} src={this.props.unSelectedIcon} alt=""></img>
                    </button>
                    <label>{this.props.label}</label>
                </div>

            );
        }
    }
}

export default (IconButton);