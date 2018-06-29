import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add( faChevronCircleRight );

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <SideNavbar />
      </div>
    );
  }
}

export default App;
