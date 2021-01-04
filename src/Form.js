import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const submitIdea = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    props.addIdea(newIdea);
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
