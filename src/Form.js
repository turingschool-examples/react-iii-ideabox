import { useState } from 'react';
import './Form.css';

export default function Form({ addIdea }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  function submitIdea(event) {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    addIdea(newIdea);
    clearInput();
  }

  function clearInput() {
    setTitle('');
    setDescription('');
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

    <button onClick={event => submitIdea(event)}>SUBMIT</button>
  </form>
  )
}