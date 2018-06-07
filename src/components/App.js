import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import TilesContainer from './TilesContainer'
import hogs from '../porkers_data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
      selectBy: ""
    }
  }

  liftSelectStatus = (liftSelectStatus) => {
    const selectBy = liftSelectStatus
    this.setState({
      selectBy
    })
  }

  liftFilterStatus = (liftedState) => {
    const status = liftedState
    this.setState({
      status
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <br/>
          < Filter liftSelectStatus={this.liftSelectStatus} liftFilterStatus={this.liftFilterStatus}/>
          <br/>
          < TilesContainer selectBy={this.state.selectBy} greased={this.state.status} hogs={hogs} />
      </div>
    )
  }
}

export default App;
