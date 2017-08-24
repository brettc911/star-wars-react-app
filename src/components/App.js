import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      vehicles: [],
      value: '',
      pilot: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleNameChange(e) {
    this.setState({value: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault()
    let name = this.state.value
    this.setState({pilot: name})
    console.log(this.state.poop);
    this.setState({value: ''})
    this.setState({pilot: ''})
  }

  componentWillMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(r => r.json() )
    .then(json => {
      // console.log("Data from componentWillMount fetch", json.results)
      this.setState({vehicles: json.results})
      console.log(this.state.vehicles);
    })
  }

  render() {
    let ships = this.state.vehicles.map(vehicle => {
      return(
        <div key={vehicle.name} className="col-sm-4 card">
          <ul>
            <li>{vehicle.name}</li>
            <li>{vehicle.model}</li>
            <li>{vehicle.manufacturer}</li>
            <li>{vehicle.class}</li>
          </ul>
        </div>
      )
    })

    return (
      <div className="App">
        <section className="jumbotron">
          <h1>Star Wars</h1>
          <p>The Vehicles of Star Wars</p>
        </section>
        <section className="form">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>What is your name Pilot?</h1>
            <input name="pilot" value={this.state.value} onChange={this.handleNameChange}></input>
            <button>Submit</button>
            <h2>{this.state.pilot}</h2>
          </form>
        </section>
        <section className="">
          <div className="container-fluid">
            <div className="row">
              {ships}
          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default App;
