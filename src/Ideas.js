import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './Ideas.css';

const Ideas = ({ideas, removeIdea}) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        removeIdea={removeIdea}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

Ideas.propTypes = {
  ideas: PropTypes.array.isRequired,
  removeIdea: PropTypes.func.isRequired
}

export default Ideas;
