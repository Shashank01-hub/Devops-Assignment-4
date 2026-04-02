import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

function TodoList({ title, tasks, onDelete, onToggleDone }) {
  return (
    <section className="todo-section">
      <h2>{title}</h2>
      {tasks.length === 0 ? (
        <p className="empty-text">No tasks found.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggleDone={onToggleDone}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired
};

export default TodoList;
