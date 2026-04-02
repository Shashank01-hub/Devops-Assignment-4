import PropTypes from 'prop-types';

function TaskItem({ task, onDelete, onToggleDone }) {
  return (
    <li className={`task-item ${task.done ? 'done' : ''}`}>
      <span>{task.text}</span>

      <div className="task-actions">
        {!task.done && (
          <button type="button" onClick={() => onToggleDone(task.id)}>
            Mark Done
          </button>
        )}
        <button type="button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired
};

export default TaskItem;
