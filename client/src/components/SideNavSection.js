import React, { Component } from 'react';

import Algorithms from './../algorithms/Algorithms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SideNavbSection extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: true };
        this.titleClick = this.titleClick.bind(this);
    }

    titleClick() {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    render() {
        let icon;
        let hidden;
        if (this.state.isExpanded) {
            hidden = false;
            icon = <FontAwesomeIcon icon="chevron-circle-down"/>;
        } else {
            hidden = true;
            icon = <FontAwesomeIcon icon="chevron-circle-right"/>;
        }

        return (
            <div className="algo-section">
                <span className="title" onClick={this.titleClick}>{icon} {this.props.title}</span>
                {!hidden ? <nav>{this.props.algorithms}</nav> : null}
            </div>
        );
    }
}