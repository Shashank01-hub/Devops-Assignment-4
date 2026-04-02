import { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm({ onAdd }) {
  const [taskText, setTaskText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (taskText.trim().length === 0) {
      return;
    }

    onAdd(taskText.trim());
    setTaskText('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default TodoForm;
