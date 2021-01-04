import React, { useState, useContext } from 'react';
import AppContext from './AppContext'
import './Form.css';

function Form() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [state, dispatch] = useContext(AppContext)

  const submitIdea = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    dispatch({ type: 'ADD_IDEA', idea: newIdea })
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('')
    setDescription('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <button onClick={submitIdea}>SUBMIT</button>
    </form>
  )
}

export default Form;
