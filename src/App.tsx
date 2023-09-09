import React from "react";
import members from './assets/user.json';
import './App.css'

export default class App  extends React.Component {
  render () {
    return (
      <div className="bg-sky-300 flex flex-wrap" id='App'>
        {members.map((member)=>(
        <Card
        name={member.name}
        age={member.age}
        weight={member.weight}
        running={member.running}
        status={member.status}
        />))}
      </div>
    )
  }
}


class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="container flex flex-col p-5 m-5 bg-slate-300" id="card">
        <h1>Name: {this.props.name}</h1>
        <h1>Age: {this.props.age}</h1>
        <h1>Weight: {this.props.weight}</h1>
        <h1>Running: {this.props.running}</h1>
        <h1>Status: {this.props.status}</h1>
      </div>
    )
  }
}
