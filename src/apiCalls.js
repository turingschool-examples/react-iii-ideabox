const baseURL = 'http://localhost:3001/api/v1'

export const getIdeas = () => {
  return fetch(`${baseURL}/ideas`)
    .then(response => response.json())
}

export const postIdea = (newIdea) => {
  return fetch(`${baseURL}/ideas`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newIdea)
  })
    .then(response => response.json())
}

export const deleteIdea = (id) => {
  return fetch(`${baseURL}/ideas/${id}`, { method: 'DELETE' })
}