import React, { Component } from 'react';

export default class SideNavbar extends Component {

    render() {
        return (
            <div class="side-navbar">
                <div class="header">
                    <span class="title">Coding Algorithms</span>
                </div>

                <div class="algo-list">

                    <div class="algo-section">
                        <span class="title">Algorithms</span>
                        <nav>
                            <a>Bubble sort</a>
                            <a>Bubble sort</a>
                            <a>Bubble sort</a>
                            <a>Bubble sort</a>
                        </nav>
                    </div>
                    
                    <div class="algo-section">
                        <span class="title">Algorithms</span>
                        <nav>
                            <a>Bubble sort</a>
                            <a>Bubble sort</a>
                            <a>Bubble sort</a>
                            <a>Bubble sort</a>
                        </nav>
                    </div>

                </div>
            </div>
        );
    }
}