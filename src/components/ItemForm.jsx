function ItemForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="habitName" placeholder="Habit name" />
      <button type="submit">Add habit</button>
    </form>
  )
}

export default ItemForm
