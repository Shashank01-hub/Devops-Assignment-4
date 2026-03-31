import { useState } from 'react'

function TodoInput({ onAddTodo }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!taskText && !taskText.trim()) {
      return
    }

    onAddTodo(taskText)
    setTaskText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task-input">
        Enter a task
      </label>
      <input
        id="task-input"
        type="text"
        className="task-input"
        placeholder="Enter a task..."
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  )
}

export default TodoInput
