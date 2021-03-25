import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, id, removeIdea, isFavorited }) => {
  return (
    <div className={`card ${isFavorited && 'favorite'}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </div>
  )
}

Card.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeIdea: PropTypes.func.isRequired,
  isFavorited: PropTypes.bool
}

export default Card;
