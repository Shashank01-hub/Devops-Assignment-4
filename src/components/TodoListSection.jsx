import TodoItem from './TodoItem'

function TodoListSection({
  title,
  tasks,
  emptyMessage,
  onDelete,
  onToggleDone,
  completed = false,
}) {
  return (
    <section className="todo-section">
      <div className="section-head">
        <h2>{title}</h2>
        <span className="count-pill">{tasks.length}</span>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-text">{emptyMessage}</p>
      ) : (
        <ul className="todo-list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggleDone={onToggleDone}
              completed={completed}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TodoListSection
