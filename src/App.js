import React, { useState, useEffect } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    document.title = `Ideabox (${ideas.length})`
  })

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
  }

  const deleteIdea = (id) => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);

    setIdeas(filteredIdeas);
  }

  return(
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea} />
    </main>
  )
}

export default App;
