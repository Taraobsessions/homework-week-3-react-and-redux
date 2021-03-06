import React, { Component } from 'react';
import './App.css';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.updateSelection = this.updateSelection.bind(this);
  }
  updateSelection(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
      <select value={this.state.value} onChange={this.updateSelection}>
      <option value="">-- Pick A Model --</option>
    {Object.keys(data).map(computer => <option value= {computer}>{`${computer} ( ${data[computer].year})`}</option>)} 
      </select>
      </div>
    );
  }
}

export default App;