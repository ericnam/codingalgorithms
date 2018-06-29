import React, { Component } from 'react';

import SideNavbar from './components/SideNavbar.js'
import Content from './components/Content.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
library.add( faChevronCircleRight );
library.add( faChevronCircleDown );

class App extends Component {
  constructor() {
    super();
    this.state = {
      content : ""
    };
  }

  updateContent = () => {};

  render() {
    return (
      <div className="App">
        <SideNavbar content={this.state.content}/>
        <Content content={this.state.content}/>
      </div>
    );
  }
}

export default App;
