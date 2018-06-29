import React, { Component } from 'react';

import Algorithms from './../algorithms/Algorithms';

export default class SideNavbar extends Component {

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
                        algorithms.push(<a>{section.algorithms[key2].title}</a>);
                    }
                }

                nav.push(
                    <div className="algo-section">
                        <span className="title">{title}</span>
                        <nav>{algorithms}</nav>
                    </div>
                );

            }
        }
        return nav;
    }

    render() {
        return (
            <div class="side-navbar">
                <div class="header">
                    <span class="title">CODING ALGORITHMS</span>
                </div>

                <div class="algo-list">
                    {this.createNav()}
                </div>
            </div>
        );
    }
}