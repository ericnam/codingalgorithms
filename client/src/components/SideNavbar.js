import React, { Component } from 'react';

import SideNavSection from './SideNavSection.js';
import Algorithms from './../algorithms/Algorithms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SideNavbar extends Component {
    constructor(props) {
        super(props);
    }

    createNav = () => {
        let nav = [];
        let algorithms = [];
        let title;
        
        for (var key in Algorithms) {
            if (Algorithms.hasOwnProperty(key)) {
                let section = Algorithms[key];

                title = section.title;
                for (var key2 in section.algorithms) {
                    if (section.algorithms.hasOwnProperty(key2)) {
                        algorithms.push(<a>{section.algorithms[key2]["attributes"].title}</a>);
                    }
                }
                nav.push(
                    <SideNavSection title={title} algorithms={algorithms}/>
                );
            }
        }
        return nav;
    }

    render() {
        return (
            <div className="side-navbar">
                <div className="header">
                    <span className="title">CODING ALGORITHMS</span>
                </div>

                <div className="algo-list">
                    {this.createNav()}
                </div>
            </div>
        );
    }
}