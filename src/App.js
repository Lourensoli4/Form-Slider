import React, { Component } from 'react';
import './App.scss';
import Form from './components/form/form.component';
import Sidebar from './components/sidebar/sidebar.component';
import Slide from './components/slide/slide.component';

class App extends Component {

  constructor() {
    super();
    this.state = { isToggled: false };
  }

  updateToggle(isToggled) {
    this.setState({ isToggled: isToggled });
  }

  render() {

    return (
      <div className="App">

        <Sidebar onToggled={e => this.updateToggle(e)} />

        <div className={`right main right-1 ${this.state.isToggled ? "" : "slide"}`}>

          <Slide />

        </div>

        <div className={`right form-container`}>

          <Form />

        </div>

      </div>

    );
  }

}


export default App;
