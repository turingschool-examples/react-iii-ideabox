import React, { useState, useEffect, useReducer } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import AppContext from './AppContext'
import './App.css';

const initalState = {
  ideas: [],
  theme: 'dark'
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      return {...state, theme: newTheme}
    case 'ADD_IDEA':
      return {...state, ideas: [...state.ideas, action.idea]}
    case 'REMOVE_IDEA':
      const filteredIdeas = state.ideas.filter(idea => idea.id !== action.id);
      return {...state, ideas: filteredIdeas}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState)

  useEffect(() => {
    document.title = `Ideabox (${state.ideas.length})`
  })

  const toggleTheme = () => {
    const action = { type: 'TOGGLE_THEME' }
    dispatch(action)
  }

  return(
    <AppContext.Provider value={[state, dispatch]}>
      <main className='App'>
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Form />
        <Ideas />
      </main>
    </AppContext.Provider>
  )
}

export default App;
