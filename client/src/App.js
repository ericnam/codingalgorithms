import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar'

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
