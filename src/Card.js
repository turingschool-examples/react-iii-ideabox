import React, { useContext } from 'react';
import './Card.css';
import AppContext from './AppContext'

const Card = ({ title, description, id, deleteIdea, isFavorited }) => {
  const [state, dispatch] = useContext(AppContext)

  return (
    <div className={`card ${isFavorited && 'favorite'} ${state.theme}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_IDEA', id })}>🗑</button>
    </div>
  )
}

export default Card;
