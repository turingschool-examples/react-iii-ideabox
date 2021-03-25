import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import { getIdeas, postIdea, deleteIdea } from './apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [],
      error: ''
    }
  }

  componentDidMount() {
    getIdeas()
      .then(ideas => this.setState({ ideas }))
      .catch(err => this.setState({ error: 'Something went wrong' }))
  }

  addIdea = (newIdea) => {
    postIdea(newIdea)
      .then(result => {
        if (result.id) {
          this.setState({ ideas: [...this.state.ideas, result], error: '' })
        } else {
          this.setState({ error: 'Please fill out both fields!' })
        }
      })
  }

  removeIdea = (id) => {
    deleteIdea(id)
      .then(response => {
        if (response.ok) {
          const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
          
          this.setState({ ideas: filteredIdeas, error: '' });
        } else {
          this.setState({ error: `There was a problem deleting that idea!` })
        }
      })
  }

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        {!!this.state.error &&
          <h2>{this.state.error}</h2>
        }
        {!this.state.error && !this.state.ideas.length &&
          <h2>Loading...</h2>
        }
        <Ideas ideas={this.state.ideas} removeIdea={this.removeIdea} />
      </main>
    )
  }
}

export default App;
