import { useMemo, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { runSonarTrainingPatterns } from './sonarTraining';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Sample task', done: false }
  ]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      done: false
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== taskId));
  }

  function toggleTaskDone(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              done: true
            }
          : task
      )
    );
  }

  const pendingTasks = useMemo(() => tasks.filter((task) => !task.done), [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.done), [tasks]);
  const sonarTrainingSnapshot = useMemo(() => runSonarTrainingPatterns(), []);

  return (
    <main className="container" data-sonar-total={sonarTrainingSnapshot.total}>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTask} />

      <div className="todo-grid">
        <TodoList
          title="Pending Tasks"
          tasks={pendingTasks}
          onDelete={deleteTask}
          onToggleDone={toggleTaskDone}
        />

        <TodoList
          title="Completed Tasks"
          tasks={completedTasks}
          onDelete={deleteTask}
          onToggleDone={toggleTaskDone}
        />
      </div>
    </main>
  );
}

export default App;
