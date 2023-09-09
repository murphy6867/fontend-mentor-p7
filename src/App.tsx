import React from "react";
import './App.css';

export default class App extends React.Component {

  render () {
    return (
      <div className="bg-gray-500 p-5 flex items-center justify-center" id="App">
        <Content />
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Temperature: 32,
    }
  }

  render() {

    return (
      <div className="bg-teal-200 flex flex-col items-center justify-center rounded-2xl p-5" id="Content">
        <Header Temperature={this.state.Temperature} />
        <Footer Temperature={this.state.Temperature} 
          setState={(newState) => this.setState(newState)}
        />
      </div>
    )
  }
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {power: 'OFF'};
  }

  render() {

    const currenTem = this.props.Temperature

    return (
      <div className="w-full flex flex-col p-5 justify-center items-center">
        <div className="w-full controller flex w-100 place-content-between ustify-center items-center">
          <button className="bg-gray-500 px-4 py-2 rounded-xl text-white"
            type="button"
            onClick={()=>this.setState({power: this.state.power === 'OFF' ? 'ON' : 'OFF'})}
          >{this.state.power}</button>
          <h1 className="">Current Temperature: {currenTem}°C</h1>
        </div>
        <Display Temperature={currenTem} />
      </div>
    )
  }
}

class Display extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="bg-gray-300 w-64 rounded-xl mt-5 flex items-center justify-center" id="display">
        <h1 className="text-5xl">{this.props.Temperature}°C</h1>
      </div>
    )
  }
}

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  handleIncrease = () => {
    this.props.setState({Temperature: this.props.Temperature + 1})
  };

  handleDecrease = () => {
    this.props.setState({Temperature: this.props.Temperature - 1})
  };

  render () {
    return (
      <div className="w-full px-9 flex items-center justify-center ">
        <button className="px-3 py-2 bg-slate-500 w-28 rounded-xl text-white me-4"
        type="button"
        onClick={this.handleIncrease}
        >Up</button>
        <button className="px-3 py-2 bg-slate-500 w-28 rounded-xl text-white"
        type="button"
        onClick={this.handleDecrease}
        >Down</button>
      </div>
    )
  }
}