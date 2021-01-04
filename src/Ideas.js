import React, { useContext } from 'react';
import Card from './Card';
import AppContext from './AppContext'
import './Ideas.css';

const Ideas = () => {
  const [state, dispatch] = useContext(AppContext)

  const ideaCards = state.ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;
