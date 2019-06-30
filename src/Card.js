import React from 'react';
import './Card.css';

const Card = ({ title, description, id, deleteIdea, isFavorited }) => {
  return (
    <div className={`card ${isFavorited && 'favorite'}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default Card;
