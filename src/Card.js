import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  // componentDidMount = () => {
  //   console.log(`Card "${this.props.title}", componentDidMount`)
  // }
  //
  // componentDidUpdate = () => {
  //   console.log(`Card "${this.props.title}", componentDidUpdate`)
  // }
  //
  // componentWillUnmount = () => {
  //   console.log(`Card "${this.props.title}", componentWillUnmount`)
  // }

  render() {
    return (
      <div className='card'>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
      <button onClick={() => this.props.deleteIdea(this.props.id)}>🗑</button>
      </div>
    )
  }
}

export default Card;
