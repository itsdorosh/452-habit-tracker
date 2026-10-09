import { useState } from 'react'

function ItemForm({ onAdd }) {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onAdd(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="habitName"
        placeholder="Habit name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Add habit</button>
    </form>
  )
}

export default ItemForm
