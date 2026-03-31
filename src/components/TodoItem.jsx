function TodoItem({ task, onDelete, onToggleDone, completed = false }) {
  return (
    <li className={`todo-item ${task.done ? 'done' : ''}`}>
      <label className="todo-check">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleDone(task.id)}
          aria-label={`Mark ${task.text} as ${task.done ? 'not done' : 'done'}`}
        />
        <span className="checkmark" aria-hidden="true"></span>
      </label>

      <span className="task-text">{task.text}</span>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        Delete
      </button>

      {completed && <span className="status-chip">Done</span>}
    </li>
  )
}

export default TodoItem
